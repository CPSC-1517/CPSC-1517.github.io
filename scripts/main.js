(function () {
  const locationPathName = window.location.pathname;
  const folder = path => path.substring(0, path.lastIndexOf('/'));
  const locationFolder = folder(locationPathName);
  console.log(locationFolder);



  window.addEventListener('load', function () {
    const store = new Vuex.Store({
      state: {
        navs: [],
        domainPath: ''
      },
      mutations: {
        loadNavs(state, payload) {
          state.navs.push(payload.nav);
        }
      }
    });

    /** fetchMarkdown 
     */
    function fetchMarkdown(path, parseOptions) { // path: string, options: object
      var defaults = {
        routeAdapter: function (href) { throw 'routeAdapter not configured for setting links during markdown-to-html parsing'; },
        renderer: {
          heading: customHeadingRenderer,
          link: customLinkRenderer,
          image: customImageRenderer
        }
      }
      var foptions = Object.assign({}, defaults, parseOptions);
      // Custom Markdown Renderings
      var renderer = new marked.Renderer();
      renderer.heading = foptions.renderer.heading;
      renderer.link = customLinkRenderer;
      renderer.image = customImageRenderer;

      /* Fetch infrastructure */
// <functionalCode>
      const isGoodStatus = status => status >=200 && status < 300;
      const status = (response) => (isGoodStatus(response.status))
        ? Promise.resolve(response)
        : Promise.reject(new Error(response.statusText));

      const responseToText = (response) => response.text();
      const splitText = text => text.split(/\r?\n/); // \r is optional to work both locally with lite-server and in production
      const indexOfFrontMatterMarker = arr => arr.indexOf('---');
      const startsWithFrontMatterMarker = arr => indexOfFrontMatterMarker(arr) === 0;
      const emptyArray = () => [];
      const toNewLineString = arr => arr.join('\n');
// </functionalCode>

      return fetch(path, { method: 'GET', cache: 'reload' })
        .then(status)
        .then(responseToText)
        .then(markdownToFrontMatterMarkup)
        .catch(consoleLogFetchError);

      /* ************ Hoisted Functions ************** */
      /* Fetch infrastructure */
      function markdownToFrontMatterMarkup(text) {
        var md = splitText(text);
        var fm = startsWithFrontMatterMarker(md) ?  md.slice(0, md.indexOf('---', 1)) : emptyArray();
        md = startsWithFrontMatterMarker(md) ? md.slice(md.indexOf('---',1) + 1, md.length) : md;

        var fms = toNewLineString(fm);
        var mds = toNewLineString(md);
        var content = {
          frontMatter: YAML.parse(fms),
          markup: marked.parse(mds, { renderer: renderer }),
          markdown: mds
        }
        return content;
      }

      function consoleLogFetchError(response) {
        // right now, just console-logging the error
        if (response && response.headers) {
          console.log('<!--  Fetch Error:');
          console.log(response.headers.get('Content-Type'));
          console.log(response.headers.get('Date'));

          console.log(response.status);
          console.log(response.statusText);
          console.log(response.type);
          console.log(response.url);
          console.log('... end Fetch Error-->');
        } else {
          console.log('<!--  Fetch Error:');
          console.log(response);
          console.log('... end Fetch Error-->');
        }
      }

      /* Custom Markdown Renderings */
      function customHeadingRenderer(text, level) {
        var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

        return '<h' + level + '><a name="' +
          escapedText +
          '" class="anchor" href="#' +
          escapedText +
          '"><span class="header-link"></span></a>' +
          text + '</h' + level + '>';
      };

      function customLinkRenderer(href, title, text) { // string, string, string
        if (!href.startsWith('http')) {
          href = foptions.routeAdapter(href);
        }
        if (this.options.sanitize) {
          try {
            var prot = decodeURIComponent(unescape(href))
              .replace(/[^\w:]/g, '')
              .toLowerCase();
          } catch (e) {
            return '';
          }
          if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
            return '';
          }
        }
        var out = '<a href="' + href + '"';
        out += title ? ' title="' + title + '"' : '';
        out += '>' + text + '</a>';
        return out;
      }

      function customImageRenderer(href, title, text) { // string, string, string
        // if (!href.startsWith('http')) {
        //   href = foptions.routeAdapter(href);
        // }
        var out = '<img src="' + href + '" alt="' + text + '"';
        out += title ? ' title="' + title + '"':'';
// TODO: Clean up the srcset alternate path(s)
var altpath = folder(store.state.route.params.mdFile);

out += ' srcset="' + altpath + '/' + href +'" ';
        out += this.options.xhtml ? '/>' : '>';


        return out;
      }

    };


    /** MdContent - Component to load markdown as html
     */
    const MdContent = {
      routeHomePath: '/',
      routePath: '/vue/:mdFile*',
      routeLinkAdapter: function (href) {
        return '#/vue/' + href;
      },
      template: '<core-content :header="header" :footer="footer" :theContent="theContent"></core-content>',
      data: function () {
        return {
          theContent: '',
          frontMatter: {},
          header: {},
          footer: {}
          // ,
          // navs: []
          , allNavs: store.state.navs
        }
      },
      computed: {
        navs: function () {
          return this.$store.state.navs;
        }
      },
      methods: {
        process: function (content) {
          if (content) {
            this.$data.theContent = content.markup;
            this.$data.frontMatter = content.frontMatter;
            if (content.frontMatter) {
              this.$data.header = content.frontMatter.header;
              this.$data.footer = content.frontMatter.footer;
            }
          }
        },
        fetchFile: function (toFile) {
          if (!toFile) {
            toFile = this.$root.defaultDoc;
          }
          console.log(folder(toFile));
          var process = this.process;
          // console.log(process);
          fetchMarkdown(toFile, { routeAdapter: MdContent.routeLinkAdapter }).then(process);
        }
      },
      created() {
        // TODO: Process parentNav parameter
        this.navs = this.$root.navs;
        this.fetchFile(this.$route.params.mdFile);
      },
      watch: {
        '$route'(to, from) {
          this.fetchFile(to.params.mdFile);
        }
      }
    };

    const routes = [
      { path: MdContent.routePath, component: MdContent },
      // TODO: Route for :parentNav
      { path: MdContent.routeHomePath, component: MdContent }
    ];
    console.log(location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/');
    const router = new VueRouter({
      base: location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/',
      routes: routes // in es6, just use:  routes
    });

// TODO: look for a better way to package the vuex-router-sync module
    // sync function credits:
    // https://github.com/vuejs/vuex-router-sync/blob/master/index.js
    var sync = function (store, router, options) {
      var moduleName = (options || {}).moduleName || 'route'

      store.registerModule(moduleName, {
        state: cloneRoute(router.currentRoute),
        mutations: {
          'router/ROUTE_CHANGED': function (state, transition) {
            store.state[moduleName] = cloneRoute(transition.to, transition.from)
          }
        }
      })

      var isTimeTraveling = false
      var currentPath

      // sync router on store change
      store.watch(
        function (state) { return state[moduleName] },
        function (route) {
          if (route.fullPath === currentPath) {
            return
          }
          isTimeTraveling = true
          currentPath = route.fullPath
          router.push(route)
        },
        { sync: true }
      )

      // sync store on router navigation
      router.afterEach(function (to, from) {
        if (isTimeTraveling) {
          isTimeTraveling = false
          return
        }
        currentPath = to.fullPath
        store.commit('router/ROUTE_CHANGED', { to: to, from: from })
      })
    }

    function cloneRoute (to, from) {
      var clone = {
        name: to.name,
        path: to.path,
        hash: to.hash,
        query: to.query,
        params: to.params,
        fullPath: to.fullPath,
        meta: to.meta
      }
      if (from) {
        clone.from = cloneRoute(from)
      }
      return Object.freeze(clone)
    };
    
    sync(store, router); // https://github.com/vuejs/vuex-router-sync/blob/master/README.md
    
    Vue.use(VueRouter);
    // Vue.use(Vuex);
    Vue.component('core-content', {
      data: function () {
        return {
          allNavs: store.state.navs
        }
      },
      props: ['theContent', 'header', 'footer'],
      template: `<main>
      <nav v-for="item in allNavs" :class="item.frontMatter.position"><section v-html="item.markup"></section></nav>
      <header v-if="header"><h1>{{header.title}}</h1><p>{{header.summary}}</p></header>
    <article v-html="theContent" class="markdown-body"></article>
    <footer v-if="footer"><ul><li>Author: {{footer.author}}</li><li>Contributors: {{footer.contributors}}</li><li>Created On: {{footer.created}}</li><li>Modified On: {{footer.modified}}</li></ul></footer>
  </main>`
    });

    Vue.component('a-nav', {
      props: ['navContent', 'navMeta'],
      template: `<nav><section v-html="navContent"></section></nav>`
    })
    const app = new Vue({
      // Make sure to inject the router with the router option to make the whole app router-aware.
      router: router, // in es6, just use:  router,
      store: store,   // in es6, just use:  store,
      // devtools: false,
      data: {
        navDoc: 'SUMMARY.md',
        defaultDoc: 'README.md'
      },
      created: function() {
        
      },
      mounted: function () {
        this.navDoc = this.$el.dataset.nav;
        this.defaultDoc = this.$el.dataset.home;
        fetchMarkdown(this.navDoc, { routeAdapter: MdContent.routeLinkAdapter })
          .then(function (content) {
            if (content) {
              store.commit('loadNavs', { nav: content });

              var __fm = content.frontMatter;
              console.log(__fm);
              if (__fm) {
                // Process .target
                el = document.createElement('div');
                el.innerHTML = content.markup;
                var links = el.getElementsByTagName('a');
                for (var i = 0; i < links.length; i++) {
                  if (__fm.target === 'nav') {
                    // then there is a secondary set of navs to be loaded
                    var path = links[i].href.replace('#/vue/', '');
                    fetchMarkdown(path, { routeAdapter: MdContent.routeLinkAdapter })
                      .then(function (nextContent) {
                        store.commit('loadNavs', { nav: nextContent });
                      });
                  }
                }
                if (__fm.home) {
                  var hm = document.createElement('li');
                  hm.innerHTML = '<a href="#/vue/' + (__fm.home.url || 'README.md') + '">' + (__fm.home.text || 'Home') + '</a>';
                  var ul = el.getElementsByTagName('ul')[0];
                  ul.innerHTML = hm.outerHTML + ul.innerHTML;
                  console.log(el.innerHTML);
                  content.markup = el.innerHTML;
                }
              }
            }
          });
      }
    }).$mount('#app')
  });
})();
