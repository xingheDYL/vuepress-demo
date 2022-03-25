module.exports = {
    title: "星河",
    description: "星河2",
    head: [
        // ['meta', { name: "baidu_union_verify", content: "a0036ccf0b657813fb236f80f376c429" }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["link", { rel: "icon", href: "/assets/images/favicon.ico" }],
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
        lastUpdated: '更新时间:', 
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
    }
}