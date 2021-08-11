'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "895e46476831950e59708475e0420f15",
".git/config": "c070a24f39f55a4aff250ab43484ab07",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d241907a19cfe25ff172213cdcb84479",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "472cb0923d1609a5ae5bc50a7d53f87d",
".git/logs/refs/heads/master": "472cb0923d1609a5ae5bc50a7d53f87d",
".git/logs/refs/remotes/origin/master": "70a9ab7b2aed450921d9e5c42c726165",
".git/objects/1b/34aa98ac9c4385a1053df9dca82aed5b9964bc": "ed3082e1945b334155581e470bab8d38",
".git/objects/1f/7d9ed3c3f323c7941bf7aae36fd9e3ac704b9a": "7d6f9d25d45fb100f552d2c2ba238e10",
".git/objects/20/d87e5166c28e3606fbdf4af3fdeef048686191": "a5192ee09c9768df4d6392db844d4386",
".git/objects/2a/102826cbbb97df4b0b757cb078291ce2f8111a": "90490b9bcc4333afd4547cc258a84628",
".git/objects/2a/8e80299056b4f9bcc6ba3356f592ab0f270d21": "0099fa9a08785cfa897f55c037b713f5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/ecc9e3f6a44d42c1d466eb3c49546468141844": "3d9f52a14b8867712b04c65bafcbb360",
".git/objects/34/ddfd289e7169be4a806281818607f06a6d7cdb": "47294a78ad090d05cc57fc0aa60d43f4",
".git/objects/3c/e1867241d9bec52b057f52fb2dd413d975d285": "31c40dc9048488570411c538f01e1f33",
".git/objects/3d/ba33094b91b66965d2944c6d3b6277ffc12fbd": "aa93ab0049b5465270d88b623eedfa88",
".git/objects/3e/5afa5209749bf388dba245b8c8352e7537a49a": "e7a8c121a8bb7e9e0bbffbfbaceff3c1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/382c1cf2ae3a4f42bbd226e76a65d10e97b530": "1e4ca770b48c839ba8fd97ba0f336a01",
".git/objects/66/3c9f670e112c841c64a0f7c879043f15e27c45": "dbb677c7f190247a2d8804c1acdb644f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c5ed4ff56ae355daf1c35f2ea1d3d5707d52a2": "dc6df2b0b671ab42543308f9233f568c",
".git/objects/84/af0bdd9360d84eadeabf5c17fdb5faa3a0e3f7": "16ffb8b1806cabb56af9c81c104e94f5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/672f34717a3ca33a42b8b9ffc68464c91af7ee": "0f6742c38b33ab1f3ea46fe4d7f13042",
".git/objects/93/1af33cb799ef4cde9a60612278203a9697ebb2": "bc4b5435564e1be3843288a2f09a862e",
".git/objects/9e/ef253207bc53131a0c434484d6a03c508a4cc8": "13ee9486a08e5ec05ce734f9dee213df",
".git/objects/a0/889c7c40ea814ee818b8827e442b51e1f11ef5": "adf303235be866cadc7ed30d12c13bbc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/034d2f0e3f5247c9f55ad91be83e158bedef0f": "612ee44679e267f2b1881f4882257ed8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/3bdc8687add552e9dee6881b0ee44c3ce7dd88": "f0ae6ab72fb734574d56d4cea68ba8d5",
".git/objects/b0/ae61e5353048ad3f9b08d19e688df30215873f": "ed307fe30d9be98f551136340dc9441d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/1bbe4172c2d32cdb157ba5fd11164f271f10cc": "fa93ec6588308b8b73336ce3c3d0be83",
".git/objects/c8/451845d11f9948be1e03895ebdb6127735ea01": "beb07c25ef40cc31e195155262ebac4a",
".git/objects/c9/21f5e159a40daa4c07f8724b87c98a9fa8b755": "1ea13b610bf3654bce4424e72441b905",
".git/objects/cb/869ba89e847f5cdfd73809f63199498283f318": "c590f139115fc48fb224f564e21e2f63",
".git/objects/cc/9eb5644af26af99b6e256c2e6dd26d18c2111b": "e8a2f53cbafbb75299fce9181a66c958",
".git/objects/d4/4dac6c42939484a9a6f58c853615b0ea8599b5": "e6b50e9e14dd6a456746dd192b61f5ab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/3b30100ccdb594e53cf22236731cf2d89d93d4": "fa0c7e37259137e73db3671feb39825b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/37e68763a78dd83e1274efdd54566fd66ffdbe": "cb06e30eede7b6d2228321e5a5d75510",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/adc81334ce38921a4d8053214ef446b6b6261b": "695ae4480712a21a928609b06d9f9eb3",
".git/objects/ff/c6ee94a1850d8d264a0de2ed23ca9970646587": "666dd4893f795375c2fe1dc8a7377ef1",
".git/refs/heads/master": "ed924ae587e7f6f9e481527ea09fc570",
".git/refs/remotes/origin/master": "ed924ae587e7f6f9e481527ea09fc570",
"assets/AssetManifest.json": "9ff06f158ff5b7c3bce71e2ac3cb7597",
"assets/assets/images/img1.jpg": "879227fe92de31025d625e2404dc7c20",
"assets/assets/images/img2.jpg": "6c7aa8fd0fae16449531b1f837af264b",
"assets/assets/images/img3.jpg": "5963379be189bff6c3aefe462dba2a5d",
"assets/assets/images/img4.jpg": "69717d9865eef30c40f6b56db4226589",
"assets/assets/images/img5.jpg": "9822f7825d8df40b5dc049ae7786f99d",
"assets/assets/images/img6.jpg": "c293c27a3afad3c500e6bf8fc4e59839",
"assets/assets/images/img7.jpg": "35e7f3eecd0f25019be4b71a2fa4bcd0",
"assets/assets/images/img8.jpg": "7a791285f430e7668d5ed19986cc74dd",
"assets/assets/images/img9.jpg": "9656cdd5fa437c5e96cd84ed7063d973",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e75727d5eb390fd8cf75c9c3ac53edc7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dcd9c66a7f57a9281a2024af2309a685",
"/": "dcd9c66a7f57a9281a2024af2309a685",
"main.dart.js": "a1c56f8f41e7b629e76e0f689f026d50",
"manifest.json": "619e9255a6152ad5614ad53a6552d627",
"version.json": "c1593fb835d3c86e006427dcf6819604"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
