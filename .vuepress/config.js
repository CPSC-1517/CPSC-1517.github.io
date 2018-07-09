module.exports = {
    title: 'CPSC-1517 Student Notes',
    description: 'Introduction to Application Development',
    markdown: {
        config: md => {
            md.set({ breaks: true })
            md.use(require('markdown-it-imsize'))
            md.use(require('markdown-it-mermaid').default) // leave default options
            md.use(require('markdown-it-checkbox'))
            md.use(require('markdown-it-kbd'))
            md.use(require('markdown-it-deflist'))
            md.use(require('markdown-it-abbr'))
            md.use(require('markdown-it-mark'))
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-sub'))
            md.use(require('markdown-it-sup'))
              }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/about/' },
            { text: 'LOGs', link: '/logs/' },
            { text: 'C-Sharp', link: '/csharp/' },
            { text: 'Html', link: '/html/' },
            { text: 'Razor', link: '/razor/' },
            { text: 'Client-Server', link: '/clientserver/' },
            { text: 'Webforms', link: '/webforms/' },
            { text: 'Issues/Bugs', link: 'https://github.com/CPSC-1517/CPSC-1517.github.io/issues/new' },
            { text: 'Moodle', link: 'https://moodle.nait.ca' },
        ],
        sidebar: {
            '/csharp/': [
                '',
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

            '/clientserver/': [
                '',
                'tutorial-1-visualstudio'
            ],

            '/webforms/': [
                '',
                '01-overview',
                '02-servercontrols',
                'asp-controls-intro',
                'tutorial-2-maptodb',
                // 'tutorial-3-display',
                // 'tutorial-4-insert',
                // 'tutorial-5-updatedelete',
                // 'tutorial-6-gridview',
                // 'tutorial-7-databound',
                // 'tutorial-8-databound',
                // 'tutorial-9-databoundedit'
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

            '/Instructor/': [
                ''
            ],

            // fallback
            '/about/': [
                '',
                'colophon',
                'todo',
                'markdown-syntax'
            ]
        }
    }
}
