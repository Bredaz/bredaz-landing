const CACHE_NAME = 'encryptia-offline-v2';

// Inicialización e instalación de la caché
self.addEventListener('install', (event) => {
    self.skipWaiting();
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

// Limpiar caches anteriores al activar
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

// Interceptar peticiones (Network-first, fallback to cache)
self.addEventListener('fetch', (event) => {
    // Solo interceptar peticiones GET de nuestro propio origen
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    // NUNCA interceptar archivos .wasm — WebAssembly.compile necesita
    // respuestas de red reales con Content-Type application/wasm
    if (url.pathname.endsWith('.wasm')) return;

    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const cloned = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, cloned);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});
