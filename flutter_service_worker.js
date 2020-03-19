'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "3484a1f4f20f0c4c52d5f54e1fbc0a0f",
"/main.dart.js": "e69ee066a05b9ae4f86e4ee85934b7f3",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "a4fe389b5dbe91186308d9132a98b703",
"/assets/LICENSE": "3bd81ac545cb55d4c889ccf72e4ae88d",
"/assets/images/amazing_carousel.jpg": "12f340d72db90b0d4b65df8cb433dc9f",
"/assets/images/scanar.jpg": "580408a0be28b54edf7a374d17c23698",
"/assets/images/cover.jpeg": "f292c73bc1d13440d15a72513d2a3edf",
"/assets/images/worm_indicator.gif": "809bc1df523b5d9b66192a6def09988a",
"/assets/AssetManifest.json": "edfcd4a81e73b596c75f114534e8d4cf",
"/assets/FontManifest.json": "a99f3c05b655eae3c634134a7a52e5dc",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/Cassandra.ttf": "fb7810a162bf25d3929a3e9e0b8120cd",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
