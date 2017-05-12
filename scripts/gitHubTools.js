/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.5/angular.min.js" />

(function () {
    'use strict';

    var git = angular.module('gitHubTools', []);
    function parseURL(url) {
        var parser = document.createElement('a'),
            searchObject = {},
            queries, split, i;
        // Let the browser do the work
        parser.href = url;
        // Convert query string to object
        queries = parser.search.replace(/^\?/, '').split('&');
        for (i = 0; i < queries.length; i++) {
            split = queries[i].split('=');
            searchObject[split[0]] = split[1];
        }
        return {
            protocol: parser.protocol,
            host: parser.host,
            hostname: parser.hostname,
            port: parser.port,
            pathname: parser.pathname,
            pathparts: parser.pathname.split('/').filter(function (e) { return e; }),
            search: parser.search,
            searchObject: searchObject,
            hash: parser.hash
        };
    };
    git.constant('apiPaths', {
        'getFile': '',
        'getUserRepositories': 'https://api.github.com/users/:username/repos',
        'getOrgRepositories': 'https://api.github.com/orgs/:org/repos',
        'listBranches': 'https://api.github.com/repos/:owner/:repo/branches',
        'getBranch': 'https://api.github.com/repos/:owner/:repo/branches/:branch'
    });
    git.directive('repoBrowser', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/repoBrowser.html',
            controllerAs: 'vm',
            controller: function RepoBrowserController(apiPaths, $http) {
                console.log(apiPaths);
                var vm = this;
                vm.owners = ['dgilleland', 'DMIT-1508'];
                vm.listRepos = function (ownerName) {

                };
            }
        }
    });
    git.controller('LangController', function () {
        var vm = this;
        vm.url = 'https://github.com/dagilleland/I-Teach/blob/74b68bdf49b71731bd64b109844781104b4e6e23/src/I-Teach.CoursePlanningCalendar.Web/packages.config#/L3-L5';
        vm.prism = {
            supportedLanguages: ['markup', 'css', 'javascript', 'csharp', 'sql', 'git', 'yaml', 'typescript', 'sass', 'less', 'http'],
            lang: 'markup'
        };
    });
    /*
    <snip-github owner='' repo='' path='' ref='' lines='' lang=''></snip-github>
    */
    git.directive('snipPreview', function () {
        return {
            restrict: 'E',
            replace: true,
            //template: ,
            //transclude: true,
            compile: function (telement, attrs) {
                var template = '<div><snip-github url=":url" :lang ></snip-github></div>'; //element.html();
                var url = location.search.replace('?url=', '') + location.hash;
                template = template.replace(':url', url).replace(':lang', 'lang="sql"');
                telement.html(template);
                // Return the linking functions
                return {
                    pre: function (scope, element, attrs) {

                    },
                    post: function (scope, element, attrs) {

                    }
                }
            }
        };
    })

    var counter = 0;
    git.directive('snipGithub', function ($http) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                ghLang: '@lang',
                ghUrl: '@url'
            },
            template: '<div><pre><code class="line-numbers language-{{ghLang}}"></code></pre></div>',
            link: snipGithubPostLink,
            controller: function ($scope) {
                $scope.about = counter++;
                console.log($scope);
            }
        };

        // Hoisted functions
        function snipGithubPostLink(scope, element, attrs) {
            // Closure Variables
            var file; // file:object // to hold the language/url information
            var parsed;
            var apiPath;
            var range;
            var start, end;

            // Function logic
            scope.loadedCode = false;
            scope.setLang = false;
            scope.$watchGroup(['loadedCode', 'setLang'], watchGroup_LoadedCode_SetLang);
            attrs.$observe('lang', observeLang);
            file = {
                url: attrs.url
            };
            parsed = parseURL(file.url);
            scope.file = file;

            if (file.url && parsed && parsed.host === 'github.com' && parsed.pathparts.length > 4 && parsed.pathparts[2] === 'blob') {
                file.owner = parsed.pathparts[0];
                file.repo = parsed.pathparts[1];
                file.lines = parsed.hash; // #L1-L6 or #/L1-L6.replace('-', ':')
                file.path = parsed.pathparts.slice(4).join('/');
                file.ref = parsed.pathparts[3];

                apiPath = buildApiPath(file);

                if (file.lines) {
                    range = file.lines.replace('#', '').replace('/', '').replace('L', '').replace('L', '').split('-');
                    angular.element(element).find('pre').attr('data-start', range[0]);
                    start = parseInt(range[0], 10);
                    end = parseInt(range[1], 10);
                    scope.range = {
                        start: start,
                        end: end
                    };
                }


                $http.get(apiPath)
                    .success(getApiPath_Success)
                    .error(getApiPath_Error);
            } else {
                element.html('<blockquote>No url supplied. Unable to display code snippet.</blockquote>')
            }

            // Hoisted functions
            function watchGroup_LoadedCode_SetLang(newValues, oldValues, wScope) {
                if (newValues[0] && newValues[1])
                    Prism.highlightAll();
                //else
                //    console.log(scope.loadedCode + '-' + scope.setLang);
            };
            function observeLang(value) {
                scope.setLang = !scope.setLang;
                //scope.setLang = true;
                //if (scope.loadedCode) {
                //    Prism.highlightAll();
                //}
            };
            function getApiPath_Error() {
                console.log('error getting ' + apiPath);
            };
            function getApiPath_Success(data) {
                $http.get(data.download_url)
                    .success(getDownloadUrl_Success);
            };
            function getDownloadUrl_Success(file) {
                var lines = file.split('\n');
                var snip = lines.join('\n');
                if (angular.isNumber(start) && angular.isNumber(end) && start < end)
                    snip = lines.slice(start - 1, end).join('\n');
                else if (angular.isNumber(start) && start >= 0 && start < lines.length)
                    snip = lines[start - 1];
                angular.element(element).find('code').text(snip);
                scope.loadedCode = true;
                scope.setLang = true;
            }
        }
        function buildApiPath(file) {
            var apiPath;
            apiPath = 'https://api.github.com/repos/:owner/:repo/contents/:path:ref'
                .replace(':owner', file.owner)
                .replace(':repo', file.repo)
                .replace(':path', file.path);
            if (file.ref !== 'master')
                apiPath = apiPath.replace(':ref', '?ref=' + file.ref);
            else
                apiPath = apiPath.replace(':ref', '');
            return apiPath;
        };
    });
})();


