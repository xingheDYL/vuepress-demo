const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
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
    },
    '@vuepress/back-to-top': true
}