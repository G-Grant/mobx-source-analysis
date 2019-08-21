module.exports = {
    base: '/Mobx/',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
        ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
    ],
    themeConfig: {
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新',
        sidebar: 'auto',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '博客',
                link: 'https://g-grant.github.io/Note/'
            },
            {
                text: 'Github',
                link: 'https://github.com/G-Grant'
            }
        ]
    },
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Mobx 源码分析',
            description: '不积跬步，无以至千里；不积小流，无以成江海。'
        }
    }
};
