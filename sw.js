// sw.js — minimal service worker for PWA installability + basic offline support.
//
// Strategy: network-first, cache fallback. This site gets deployed frequently
// (it's actively being iterated on), so a cache-first strategy would risk
// showing stale content indefinitely — network-first always serves the latest
// version when online, and only falls back to whatever's cached when offline.
// Bump CACHE_NAME when the precache list changes, so old caches get pruned.
const CACHE_NAME = 'toddbooth-v1';
const PRECACHE_URLS = ['/', '/index.html', '/events-data.js', '/manifest.json'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
