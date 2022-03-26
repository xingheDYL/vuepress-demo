const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

const secretConf = require('./secret');

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
        clientId: secretConf.clientId,
        clientSecret: secretConf.clientSecret,
        autoCreateIssue: true
    },
    '@vuepress/back-to-top': true
}