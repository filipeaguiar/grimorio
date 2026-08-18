const CACHE_NAME = 'grimorio-v8';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './spells_data.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdn.jsdelivr.net/npm/rpg-awesome@0.2.0/css/rpg-awesome.min.css',
  'https://cdn.jsdelivr.net/npm/rpg-awesome@0.2.0/fonts/rpgawesome-webfont.woff2',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Inter:wght@300;400;500;600&display=swap'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        );
      })
    ])
  );
});

self.addEventListener('fetch', (e) => {
  // Network-first for local JS and HTML to ensure immediate updates
  if (e.request.url.includes('.js') || e.request.url.includes('.html') || e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(e.request).then((res) => res || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
