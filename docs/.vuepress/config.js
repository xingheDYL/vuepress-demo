const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
    // base: "/vuepress/",
    title: "星河",
    description: "星河2",
    head: [
        ["link", { rel: "icon", href: "/assets/images/favicon.ico" }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],

        // ['meta', { name: "baidu_union_verify", content: "a0036ccf0b657813fb236f80f376c429" }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'Keywords', content: '段先生,段先生的主页,vuepress,VuePress,vuepress.dyl.fit,VuePress.dyl.fit' }],
        // 作者
        ['meta', { name: 'author', content: '星河' }],
        // 百度统计
        ['script', {}, `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?db15e22a7d0dfd0940560fa10024d468";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`],
        // ['script', { src: "/utils/js/jq3.5.1.js" }, ``],
        // ['script', { src: "/utils/js/click.js" }, ``],
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/images/logo.png',
        // navbar: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'External', link: 'https://google.com' }
        ],
        sidebar: {
            "/css/": [
                'c-aaa',
                'c-bbb',
                'c-ccc'
            ],
            "/javascript/": [
                'j-aaa',
                'j-bbb',
                'j-ccc'
            ]
        }
    },
    plugins: {
        '@vuepress/last-updated': {
            transformer: (timestamp) => moment(timestamp).format("LLLL")
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'xingheDYL',
            repo: 'vuepress',
            clientId: '8f9485afcb3e4e619d6a',
            clientSecret: '7246f5a1ae9eddd91cdf535001178d8f7820482f',
            autoCreateIssue: true
        }
    }
}