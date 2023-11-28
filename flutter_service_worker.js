'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a712b626a4d9ad9395ea9d6992b64382",
"assets/AssetManifest.bin.json": "543c73a0312647e5e279416da9490404",
"assets/AssetManifest.json": "d836652496db2f22dc9f7f2d5f2513df",
"assets/assets/4-stars.png": "8f92adb354cc51f1293c1d83324ba7fa",
"assets/assets/activeuser.png": "4d0a6aada59a063d58a280590f0b7512",
"assets/assets/age.png": "87d4684ed2916b92a249ef5ad466783a",
"assets/assets/alert.png": "2a36201931c4e069144c38a03bd49add",
"assets/assets/application.png": "c1cda9ac213188bf26d81a2349559e33",
"assets/assets/approved.png": "f5c517c82fc80a7dd11fc85db3abda11",
"assets/assets/bell.png": "f837cb25f527e93a43d98bbb4f6dbb1c",
"assets/assets/bin.png": "6d1114ec0a8515b07d49805a3ec33a67",
"assets/assets/blackburn.jpg": "fbf9e29cd14f7f4b1288700c945eb95d",
"assets/assets/button.png": "d6aaae6741aaae0078adec0df2b76b2b",
"assets/assets/camera.png": "f3ad3f1c8acaa4fbb56c0d9e6dc161f0",
"assets/assets/cardiff.jpg": "1b86440702f96fe2a7813b3c2d29a7ba",
"assets/assets/check.png": "c87ba8c858cdcf41583800e00f1a62bc",
"assets/assets/chrome.png": "518b7ed152bbfbc735191831a44fe3ee",
"assets/assets/city.jpg": "3376df99a2e54911c5428f31cf06bb62",
"assets/assets/city.png": "d07405d52d7e049676deb16c940a9c2c",
"assets/assets/city2.jpg": "20496488b7786c3fd6265c61895785d8",
"assets/assets/cubes.png": "d6f6085f5ce23a10d8cef4e0ed43322c",
"assets/assets/customer.png": "c41dc6d0d9cb98c8ccd09d7a601db3a7",
"assets/assets/dashboard.png": "61c3c34ccbf94c208e48b03af7ae9ce8",
"assets/assets/delete.png": "ab8041b827364668b442078cce450a58",
"assets/assets/delete2.png": "962f1b423c435db79265edb5c4b8aea9",
"assets/assets/dollar-symbol.png": "6291a8c258332c5b015b5e5475f88438",
"assets/assets/download.png": "33ca9d3e897ad0f99cd2731d4d71db55",
"assets/assets/email.png": "8f7b0113c1644278e9296ec7a7608bd7",
"assets/assets/feedback.png": "f723056f5b675c76394014589ff711f8",
"assets/assets/file.png": "fdf6a730583879af0ceec907733c5134",
"assets/assets/firefox.png": "32135551af0beed18cad112e519244ad",
"assets/assets/food1.jpg": "b59fefecbf77db9c1c8b57d779378132",
"assets/assets/group.png": "e7f58b2a47dbb0387251c90c25781ff0",
"assets/assets/help.png": "d9b85f80ff4a1fd6001a66b79e9f3d04",
"assets/assets/increase.png": "27af3c886cc614ce6a17a837bebe22d2",
"assets/assets/insurance.png": "1afa74fed60b635e1d2d882ca594e87e",
"assets/assets/interview.png": "219840fd513cc196e3f61eee118ca99c",
"assets/assets/lahore.jpg": "86b6e74114bbfcea54966abc4f1ae229",
"assets/assets/layout.png": "ae7b3910debc2bd6c0dfa2f22ed3a098",
"assets/assets/loader.png": "d417909355580d39b912d26cdcd10e78",
"assets/assets/location.png": "1827e9bed66ab92c7c0e79b6cb2de01c",
"assets/assets/logo1.png": "e2b12de7d491e0095705f76d3fb8592c",
"assets/assets/logo2.png": "5061ad11fa38dd0a7d1b58b4352991db",
"assets/assets/logo3.png": "67c63d569e28f00ad2c6656fc1dff430",
"assets/assets/logout.png": "9b3063a8887d802d74766c605ff321e9",
"assets/assets/london.jpg": "a8282f49eade5c799ef95be16080d0c8",
"assets/assets/manchester.jpg": "21eb67d467c87f68e20ecd131278daa9",
"assets/assets/medal.png": "3368d67d71484faca214a7736be5f2f5",
"assets/assets/microsoft.png": "129d7c4b2c2f946bf32cfeb33eab3520",
"assets/assets/more.png": "b4008243777476a4324153fcc19fae4e",
"assets/assets/opera.png": "fb5da8be7988b71d1a9da737ba277143",
"assets/assets/pen.png": "eaded72a93647640cf76963eab360a20",
"assets/assets/pencil.png": "f8bfdeb0ddc29268be8877cad2c272e4",
"assets/assets/person1.jpg": "dd05e74f6236df9d47773ea8d9c10d04",
"assets/assets/person2.jpg": "8277ab7c4b8052e176a049a0be243371",
"assets/assets/person3.jpg": "e335559beb3f0d8254f2ad36f2492655",
"assets/assets/person4.jpg": "124cce5d299fdefaea48b3a44e92375b",
"assets/assets/phone.png": "ebffea69c92e30836e3ca14999546f7c",
"assets/assets/queue.png": "43bf74afc166ce1333e0b4b1741c9e44",
"assets/assets/record.png": "9df6ed656016870ca5cb863f8ff40944",
"assets/assets/report.png": "4aec07d43000040cb0db9d817a80fb6e",
"assets/assets/request.png": "7050f4fe0100dcbe45774f5c35ad5559",
"assets/assets/request2.png": "4cedf56f28a6ec5f50edd658cbca4366",
"assets/assets/rise.png": "e9d30f9acc88629f1cdb221aeddb9039",
"assets/assets/safari.png": "5d526392f112ec7f8e9e7ff4d6bb3f19",
"assets/assets/search.png": "2aaa6f1be965eb98de80e55286525ff6",
"assets/assets/service.png": "1d4877a6efa8f0d0c9773bf4cd0302fd",
"assets/assets/settings.png": "92c25f37d91bbc70ba1a197b38c0b57c",
"assets/assets/share.png": "711c458a7c1810b97d84fcf42e94c9c3",
"assets/assets/skyline.png": "61052d61445f1f33f2f469a9313d52f9",
"assets/assets/smartphone.png": "eae966a1946005313ecb17233dd69d2e",
"assets/assets/support.png": "7f888d2ca2474c447d0bb8b667c3a66a",
"assets/assets/support2.png": "d9b85f80ff4a1fd6001a66b79e9f3d04",
"assets/assets/terms.png": "ff29a57700ab3a4f7f0df0b028d2b035",
"assets/assets/user.png": "8feff93941a2425f1d7b98118625a17d",
"assets/assets/user22.png": "45000b334be5509e1a9d4ffef88b5b68",
"assets/assets/warning.png": "b1e5c9ef2ea556ec3260a2a727725006",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "362254863878eef9336c9a4d9d9c5693",
"assets/NOTICES": "d701b28fef2ac1860e52524c63e46d58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e2b12de7d491e0095705f76d3fb8592c",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86e8f9dc7bf65d374e3286e35149e32a",
"/": "86e8f9dc7bf65d374e3286e35149e32a",
"main.dart.js": "0fe3cfcf38da719299bf20932673db6c",
"manifest.json": "c22d1c62bcc13d4fe62449e1db3d158b",
"version.json": "01fa06f7d4a7d394982f6769385e3d05"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
