// Service Worker Installation
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('application-template').then(function(cache) {
            return cache.addAll([
                // Add URLs of assets you want to cache
                '/welcome',

                '/index.html',
                '/index.js',
                '/manifest.json',
                '/favicon.ico',

                '/styles/style.css',
                '/app/routes.json',

                '/app/welcome/welcome.js',
                '/app/welcome/welcome.html',
                '/app/welcome/welcome.css',

                '/app/about/about.js',
                '/app/about/about.html',
                '/app/about/about.css',
                // Add more assets to cache as needed
            ]);
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