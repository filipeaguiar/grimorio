const CACHE_NAME = 'grimorio-v4';
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
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      // Return cached asset, otherwise fetch from network
      return cachedResponse || fetch(e.request).catch(() => {
        // Fallback for offline if request fails and is not cached
        return caches.match('./index.html');
      });
    })
  );
});
