self.addEventListener('install', function(event) {
    importScripts('./service-worker-files.js');

    event.waitUntil(
        caches.open('application-template').then(function(cache) {
            return cache.addAll(globalThis.installFiles);
        })
    );
});

// Service Worker Activation
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // Remove outdated caches
                    // Modify 'your-cache-name' if you change the cache name in the install event
                    return cacheName !== 'your-cache-name';
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

// Service Worker Fetch
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});