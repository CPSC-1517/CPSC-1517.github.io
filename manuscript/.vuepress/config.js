module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    dest: 'docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'C-Sharp', link: '/csharp/' },
            { text: 'Html', link: '/html/' },
            { text: 'Razor', link: '/razor/' },
            { text: 'Webforms', link: '/webforms/' },
            { text: 'Lab', link: '/lab/' },
            { text: 'LOGs', link: '/logs/' },
            { text: 'Moodle', link: 'https://moodle.nait.ca' },
        ],
        sidebar: {
            '/csharp/': [
                ''
                ,
                'c-sharp-lang-resources',
                'programming-fundamentals-study-sheet'
            ],

            '/html/': [
                '',
                'overview',
                'common-tags',
                'formElements',
                'requestResponse'
            ],

            '/razor/': [
                '',
                'setup',
                'syntax',
                'layoutPages',
                'forms',
                'usingBootstrap',
                'validationHelpers',
                'extras'
            ],

            '/webforms/': [
                '',
                '01-overview',
                '02-servercontrols'
            ],

            '/lab/': [
                '',
                'Lab-Requirements',
                'Lab-ProjectSelection'
            ],

            '/logs/': [
                '',
                'a-course-intro',
                'visual-studio',
                'csharp-review',
                'csharp-oop',
                'html-review',
                'razor-intro',
                'razor-layout',
                'razor-forms',
                'razor-validation',
                'razor-helpers',
                'razor-databases',
                'webforms-intro',
                'webforms-master-pages',
                'asp-postbacks',
                'asp-controls',
                'client-server',
                'ef6-intro'
            ],

            // fallback
            '/': [
                'about/colophon',
                'acout/todo',
                'about-markdown-syntax'
            ]
        }
    }
}
