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
    "revision": "c4f48ed72a9cdaf51a483616dee9730d"
  },
  {
    "url": "about.html",
    "revision": "dd659e536245cfac198e75931ab699f0"
  },
  {
    "url": "about1.html",
    "revision": "e5b2d3905947199ac9482b3b5b878449"
  },
  {
    "url": "about2.html",
    "revision": "7be8c1b23dacaf6db174c4b7ab9ef56d"
  },
  {
    "url": "assets/css/0.styles.7adf3117.css",
    "revision": "9688fc87ce34dd8de21fcf4e502bce74"
  },
  {
    "url": "assets/images/logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ac770a17.js",
    "revision": "f1f6506524bf15abf0157820b613eb41"
  },
  {
    "url": "assets/js/11.c26c1eba.js",
    "revision": "38bcfbc926ccf75c911dec592c4f3e7a"
  },
  {
    "url": "assets/js/12.f624b28d.js",
    "revision": "15db38bf2190d10762ab8508fb741d8a"
  },
  {
    "url": "assets/js/13.edc13f20.js",
    "revision": "f237a6ff1f03a08fb955b79330956b47"
  },
  {
    "url": "assets/js/14.e428943f.js",
    "revision": "23503e3accd0858b7b784f5d11ec73d5"
  },
  {
    "url": "assets/js/15.62c69a4a.js",
    "revision": "2df07b498d0198dd5f0b12f276b7b13c"
  },
  {
    "url": "assets/js/16.895a995b.js",
    "revision": "c59e1131b8fb2ca461dc6cb5f1217c6a"
  },
  {
    "url": "assets/js/17.953f9159.js",
    "revision": "3b6c8b90a5d704f6353d6cbe53553af5"
  },
  {
    "url": "assets/js/18.4af0575b.js",
    "revision": "51eec10ade3ae8429544310d602b4b8b"
  },
  {
    "url": "assets/js/19.aa5c2e52.js",
    "revision": "b3ad5d0ff2c625789adb868879ae3ece"
  },
  {
    "url": "assets/js/2.be9c2f9a.js",
    "revision": "a3279e7219891ebe7a1888c925075de6"
  },
  {
    "url": "assets/js/20.ecd3ed7c.js",
    "revision": "70619464b31bae991f2e119574c14b43"
  },
  {
    "url": "assets/js/21.dd48ae6b.js",
    "revision": "71cf4e0368f18788414cbf0e2704ff3e"
  },
  {
    "url": "assets/js/22.0e95ce54.js",
    "revision": "526bd5554757465a77e54b03ba5b9586"
  },
  {
    "url": "assets/js/23.487c2591.js",
    "revision": "7d6936e5bcb4b71310e3269d4db6fd58"
  },
  {
    "url": "assets/js/24.c495a20c.js",
    "revision": "c79fdee000236ceb93b9515f437613a4"
  },
  {
    "url": "assets/js/25.f03b50fb.js",
    "revision": "fe0094f00f6e4534bb5d73e0dea030ca"
  },
  {
    "url": "assets/js/26.f3828caf.js",
    "revision": "b392564c8793ce50093debbf61e95bc1"
  },
  {
    "url": "assets/js/27.70d8e512.js",
    "revision": "491cc739c51198d6f63679a6eb38d50f"
  },
  {
    "url": "assets/js/28.7444425a.js",
    "revision": "cc0c1878d7dcc242bfd4b9d54a5087f2"
  },
  {
    "url": "assets/js/29.de3894f2.js",
    "revision": "e46a4867027261cf0f4005ccd279c48a"
  },
  {
    "url": "assets/js/3.884da774.js",
    "revision": "3a5957720514ea00c4ff8786b831ed05"
  },
  {
    "url": "assets/js/30.3055a5ef.js",
    "revision": "2d1fb0d5d8fc257633adb456bac533d6"
  },
  {
    "url": "assets/js/31.4efbfa01.js",
    "revision": "729aa8189491bbe255b7ad344d190ee8"
  },
  {
    "url": "assets/js/32.7303e868.js",
    "revision": "db0478a3ffca0253559154e9923a7739"
  },
  {
    "url": "assets/js/33.7ef94be4.js",
    "revision": "9806ebcf98bfd4ae3639e1c0e134ef84"
  },
  {
    "url": "assets/js/4.9c603d5f.js",
    "revision": "dc913b2a4f6d35b910dc50d2dacbef0d"
  },
  {
    "url": "assets/js/5.ef6dd5ef.js",
    "revision": "bb8a1c10b28ae050f9a8b38367a02180"
  },
  {
    "url": "assets/js/6.6025569c.js",
    "revision": "82972d58a24c99b63dd5725fe9b65acd"
  },
  {
    "url": "assets/js/7.9b60f531.js",
    "revision": "a1d675b3c5f61d2d8d26b0f80aafa8fc"
  },
  {
    "url": "assets/js/8.5f5d2bd5.js",
    "revision": "18c2a48b75e55c49ae456e47d9dea565"
  },
  {
    "url": "assets/js/9.31de8e05.js",
    "revision": "eeb02880badee07e08f52b38669aa1ec"
  },
  {
    "url": "assets/js/app.e29dc356.js",
    "revision": "818cf15acc1c9ab36ea1bbbbe17de9a0"
  },
  {
    "url": "countup.html",
    "revision": "7d0d3d5a3ffbd0d6c9b4719fcef0b86b"
  },
  {
    "url": "css copy/c-aaa.html",
    "revision": "52ca1316078e4d592f4ead5b3c6889e6"
  },
  {
    "url": "css copy/c-bbb.html",
    "revision": "8c85400351df18e4c02438c6339a20fd"
  },
  {
    "url": "css copy/c-ccc.html",
    "revision": "28217fabd47856a3f83656a274d8ab50"
  },
  {
    "url": "css copy/index.html",
    "revision": "ac732979862c186e079778955a9626fe"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "1c9d371cf813f1816d87b92d6f036731"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "82cae5de9c1171d7126d7dfac7206f4a"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "3ec58770dc4c2a16afb55dc68bcb2837"
  },
  {
    "url": "css/index.html",
    "revision": "880b7757629b8a56d18506f0eeb82cfb"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "eda4f75f1aa40f94716f2dc7f0fde880"
  },
  {
    "url": "javascript copy/index.html",
    "revision": "0c66352730a3cc2ceac28e368948a3f4"
  },
  {
    "url": "javascript copy/j-aaa.html",
    "revision": "161639f056dde6b9f28876435d9157bd"
  },
  {
    "url": "javascript copy/j-bbb.html",
    "revision": "c4251c87678ab9053722b1ef8d17e18f"
  },
  {
    "url": "javascript copy/j-ccc.html",
    "revision": "d17a5d690204495ca70811e3ff2b48ba"
  },
  {
    "url": "javascript/index.html",
    "revision": "4aff4345ee8a906be451d12fdbb605c6"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "ebc92132d0b350a04837e00d5159015f"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "583b956c4841cc905eadc7d672c16608"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "c401a65078f82e45a11dc2472c408514"
  },
  {
    "url": "quanxue.html",
    "revision": "b1091ce3dae3a33b463f22754455f125"
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
