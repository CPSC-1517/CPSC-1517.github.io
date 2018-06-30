module.exports = {
    title: 'CPSC-1517 Student Notes',
    description: 'Introduction to Application Development',
    dest: 'docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/about/' },
            { text: 'C-Sharp', link: '/csharp/' },
            { text: 'Html', link: '/html/' },
            { text: 'Razor', link: '/razor/' },
            { text: 'Webforms', link: '/webforms/' },
            { text: 'Lab', link: '/lab/' },
            { text: 'LOGs', link: '/logs/' },
            { text: 'Issues/Bugs', link: 'https://github.com/CPSC-1517/CPSC-1517-StudentNotes/issues/new' },
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

            '/webforms/': [
                '',
                '01-overview',
                '02-servercontrols'
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
            '/about/': [
                '',
                'colophon',
                'todo',
                'markdown-syntax'
            ]
        }
    }
}
