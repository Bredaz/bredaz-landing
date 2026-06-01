const CACHE_NAME = 'encryptia-offline-v1';

// Inicialización e instalación de la caché
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './shared.js',
                './assets/android-chrome-192x192.png',
                './assets/android-chrome-512x512.png',
                './assets/apple-touch-icon.png',
                './assets/favicon-16x16.png',
                './assets/favicon-32x32.png',
                './assets/favicon.ico'
            ]);
        })
    );
});

// Interceptar peticiones (Estrategia Stale-While-Revalidate)
self.addEventListener('fetch', (event) => {
    // Solo interceptar peticiones GET de nuestro propio origen
    if (event.request.method !== 'GET') return;
    
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Silencioso, retorna el caché si está disponible
            });
            return cachedResponse || fetchPromise;
        })
    );
});
