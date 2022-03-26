module.exports=[
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
]