const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const navConf = require('./nav.js');
// const navConf = require('./config/navConf');
// const sidebarConf = require('./config/sidebarConf');

module.exports = {
    title: "星河",
    description: "星河2",
    head: headConf,
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/images/logo.png',
        nav: navConf,
        // sidebar: sidebarConf
    },
    plugins: pluginsConf
}