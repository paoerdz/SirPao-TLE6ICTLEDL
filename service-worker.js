const CACHE_NAME = "tle6ictledl-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./main/styles.css",
  "./main/app.js",
  "./main/manifest.json",
  "./images/sirpao_header.png",
  "./images/e_logo.png",
  "./images/f_logo.png",
  "./pdf/week1.pdf",
  "./pdf/week2.pdf",
  "./pdf/week3.pdf",
  "./pdf/week4.pdf",
  "./pdf/week5.pdf",
  "./pdf/week6.pdf",
  "./pdf/week7.pdf",
  "./pdf/week8.pdf"
];

// Install event: cache core files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event: cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event: serve cached files if offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

