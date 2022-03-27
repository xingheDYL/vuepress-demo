/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ddbacb7c088188aa2f84718bc3ecf5bb"
  },
  {
    "url": "assets/css/0.styles.6a040f1d.css",
    "revision": "261d729961d82c847774b5917c158aab"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/1.ee56c713.gif",
    "revision": "ee56c713dae02307b4b0a18eeebac080"
  },
  {
    "url": "assets/img/2.42074edd.gif",
    "revision": "42074eddf057a98ad3a84d6f60c3ddf1"
  },
  {
    "url": "assets/img/3.8f2ffa50.gif",
    "revision": "8f2ffa50145792e5c93e4f1d49beb56d"
  },
  {
    "url": "assets/img/4.41c0a92c.gif",
    "revision": "41c0a92cc3046e46ecfbb7b04ef7fe9b"
  },
  {
    "url": "assets/img/5.191ba8e3.gif",
    "revision": "191ba8e3ca4708417e2dc6b6082a63e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bookbook.e21192ac.png",
    "revision": "e21192acb0ed3aebcb36f0f4a2f3ba8f"
  },
  {
    "url": "assets/img/cli.7592ab42.png",
    "revision": "7592ab424590b22dd0ab9bb419c37b1d"
  },
  {
    "url": "assets/img/iconfont.daff6f33.svg",
    "revision": "daff6f330deb54896a8448ee1ebded93"
  },
  {
    "url": "assets/img/lookroot.34ae84c1.png",
    "revision": "34ae84c1dfb18d2b2d67d19b5ab3c811"
  },
  {
    "url": "assets/img/router.05e035a9.png",
    "revision": "05e035a97a7a19a800c8364a0c84a236"
  },
  {
    "url": "assets/js/1.e4c91b4c.js",
    "revision": "1f443df9db0b03c14bd7f96053bde55f"
  },
  {
    "url": "assets/js/10.845788e5.js",
    "revision": "1f18ca0b30503e4ef77c95a67c6d3d34"
  },
  {
    "url": "assets/js/11.b943cdf5.js",
    "revision": "2a894d3acdcce644147a369dc16d569f"
  },
  {
    "url": "assets/js/12.93aa35d6.js",
    "revision": "5913425b0514e7eba4936441b6cc8aaf"
  },
  {
    "url": "assets/js/13.2da6ff30.js",
    "revision": "678a8981b0c241114b5d713a701c70bc"
  },
  {
    "url": "assets/js/14.76e34b6c.js",
    "revision": "72bdaede7846a3f966d99746c484e604"
  },
  {
    "url": "assets/js/15.12047914.js",
    "revision": "9168c9a040850c5de5c2bb0d2d20a635"
  },
  {
    "url": "assets/js/16.c58dd163.js",
    "revision": "4c3822737fdb325c6a63390aa15d7bf3"
  },
  {
    "url": "assets/js/17.f834dad7.js",
    "revision": "9b9b9714cf1b04153ebc42ef54c172a8"
  },
  {
    "url": "assets/js/18.b8ace875.js",
    "revision": "eab5d9ff59498740fc977aa7f3c35d4a"
  },
  {
    "url": "assets/js/19.dad1fc62.js",
    "revision": "cda62df3e7232502da489d06bb6ce8a8"
  },
  {
    "url": "assets/js/20.2358060c.js",
    "revision": "f6b4d0ccb0005a631a813f4c0b3bbf94"
  },
  {
    "url": "assets/js/21.111b5758.js",
    "revision": "4a05fb8f3fd3f3977f6fde49444b33d1"
  },
  {
    "url": "assets/js/22.a22c49d8.js",
    "revision": "7db6c9618d206148e049686af68e5e76"
  },
  {
    "url": "assets/js/23.ec52f0c2.js",
    "revision": "d367953db95e9257ce8d136dc8dd66b3"
  },
  {
    "url": "assets/js/24.457b31fb.js",
    "revision": "b67e8de432876e504ace2496ad704cfe"
  },
  {
    "url": "assets/js/3.b11d1fe6.js",
    "revision": "d9823ff8d989e7d47280ca413a845eca"
  },
  {
    "url": "assets/js/4.4a3ae6ef.js",
    "revision": "6edbd4fe01251a07676ed0eab6f0f26d"
  },
  {
    "url": "assets/js/5.1f84c3ba.js",
    "revision": "1e43c715989a4a001db6962d9742e763"
  },
  {
    "url": "assets/js/6.e347d36b.js",
    "revision": "b8f683aad2a05cba59056527a5c3f823"
  },
  {
    "url": "assets/js/7.37047fcf.js",
    "revision": "f13acda70a7cab97cbf74845d3d6f4ab"
  },
  {
    "url": "assets/js/8.303dcc05.js",
    "revision": "8117fc12738089ceb57c0314b74c6bfc"
  },
  {
    "url": "assets/js/9.2452fca2.js",
    "revision": "9b25b2f0e3bb9c55de8ee354ac7b7977"
  },
  {
    "url": "assets/js/app.93f4ed1f.js",
    "revision": "937d1abce815d2da46ef56032c92b3d0"
  },
  {
    "url": "categories/index.html",
    "revision": "aa1a3d16d4da29c8141840babce9e89f"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "4de2bb33eaa812bd72884b535e0eacf8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "25e60555af85bba079c73ad5aa206137"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c41f041966bae464fdfdcaecbe3787bd"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "fb59737be13c21723366ee1cb0bfa466"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "25b4751a56a02ea48e41fd2c8b0c66c2"
  },
  {
    "url": "iconfont/iconfont.js",
    "revision": "4591ba278cbe745ef66e8a767c5b996f"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "daff6f330deb54896a8448ee1ebded93"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "0238cfbc253837f69055be3ac759bd3f"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "000a212d4229a27b9c5e26d04ad485ce"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "5e8e8ce8bcaf8d51e66c45c0939270b7"
  },
  {
    "url": "images/avatar.png",
    "revision": "f0d1790797da930493d45c2e75f81793"
  },
  {
    "url": "images/avatar.svg",
    "revision": "b4e4ab2fd604fbac0fdd3350010c5669"
  },
  {
    "url": "images/bg-logo.png",
    "revision": "f0d1790797da930493d45c2e75f81793"
  },
  {
    "url": "images/bg-logo.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "images/bookbook.png",
    "revision": "b2738d2ea909570149dcab0b4a0f52b6"
  },
  {
    "url": "images/favicon.svg",
    "revision": "cef05fbabeed34e853aaa9c1cf229adb"
  },
  {
    "url": "images/gitee.svg",
    "revision": "f36d3ffccbc6ff3223ce8883054339fb"
  },
  {
    "url": "images/logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "images/qq.jpg",
    "revision": "0ed63aeba802a232e66c7d31bdc49966"
  },
  {
    "url": "images/ruanyf.jpg",
    "revision": "a6b66f5b22ead995355c702c2c975674"
  },
  {
    "url": "images/wx.jpg",
    "revision": "fba0e37213a75dcefc44d4b920d29d7b"
  },
  {
    "url": "index.html",
    "revision": "f5414b4a101b79864f648b7c8a270ce5"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "c10acdf0b6bda92d5db45c1d99a253ef"
  },
  {
    "url": "tag/index.html",
    "revision": "7f6e19fb39da6c92ea2b4b342a4ad5b1"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "51428198ccc65d5863e2bbc62d000927"
  },
  {
    "url": "tag/Java基础/index.html",
    "revision": "921fe591f881b2c8433717740ce717d9"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ab41815a50e6e4ae8fcaefa8cf97ce15"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "766f418ed9f027888ca9aa7c42531b2e"
  },
  {
    "url": "tag/VueProject/index.html",
    "revision": "2f1920fb085305bf6e6ad0621227bfbb"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "763c2d8fe20ee9135576716e4c006986"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "1576baf03d24010a8697aab851dc5efd"
  },
  {
    "url": "tag/韩顺平Java/index.html",
    "revision": "8367b872a56256eec70aa0778acc2827"
  },
  {
    "url": "timeline/index.html",
    "revision": "e2792d3faec2ed41194a2133b56e21fa"
  },
  {
    "url": "utils/js/click.js",
    "revision": "c0bba5a523bb50094d1cb91ffb67bc70"
  },
  {
    "url": "utils/js/jq3.5.1.js",
    "revision": "12b69d0ae6c6f0c42942ae6da2896e84"
  },
  {
    "url": "views/About/author.html",
    "revision": "ed14dc9cc8b0c4df96c9e29b6f26d57c"
  },
  {
    "url": "views/About/resume.html",
    "revision": "73e96de0573b6748205ffd8a804dee33"
  },
  {
    "url": "views/Java/1.Java概述.html",
    "revision": "f09e206a865899988b8997eb958b7876"
  },
  {
    "url": "views/JavaScript/ES6/index.html",
    "revision": "cc1ca5df20183189887236e86755f6e2"
  },
  {
    "url": "views/Vue/Vue/Vue.html",
    "revision": "61bf722620d7bf8b395534fd051237ee"
  },
  {
    "url": "views/Vue/VuePress/aboutBlog.html",
    "revision": "c73819254b418ea989123d9636f19aae"
  },
  {
    "url": "views/Vue/VuePress/VuePress.html",
    "revision": "dd992fab53e9df5adbb331314a7456cc"
  },
  {
    "url": "views/Vue/VueProject/index.html",
    "revision": "3e886eb57812e91f080583213e25ccc0"
  },
  {
    "url": "views/Vue/VueRouter/VueRouter.html",
    "revision": "3fdcb5715926192defe29b7e2fba8fa9"
  },
  {
    "url": "views/Vue/Vuex/Vuex.html",
    "revision": "df4792528f80c8a8cd52e630a52c2e70"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
