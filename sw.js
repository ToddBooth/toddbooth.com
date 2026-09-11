// sw.js — minimal service worker for PWA installability + basic offline support.
//
// Strategy: network-first, cache fallback. This site gets deployed frequently
// (it's actively being iterated on), so a cache-first strategy would risk
// showing stale content indefinitely — network-first always serves the latest
// version when online, and only falls back to whatever's cached when offline.
// Bump CACHE_NAME when the precache list changes, so old caches get pruned.
const CACHE_NAME = 'toddbooth-v2';
const PRECACHE_URLS = ['/', '/index.html', '/events-data.js', '/manifest.json'];

// The backend API (Azure App Service). Its responses must NEVER be cached —
// see the fetch handler below for why.
const API_ORIGIN = 'https://toddbooth-api.azurewebsites.net';

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

    // Never touch the API. Returning without calling respondWith() hands the
    // request back to the browser untouched — no caching, no cache fallback.
    //
    // Without this, the network-first handler below would write every API
    // response into the cache and then serve it from there whenever the fetch
    // failed. On the F1 Free tier that failure is routine, not exceptional:
    // cold starts, idle unload, and the 60 CPU-minute/day quota all make the
    // API briefly unreachable. The page would silently show stale data with no
    // error — worse than an honest failure the UI can report.
    //
    // Note this is deliberately NOT a blanket same-origin check. The React,
    // React Router and Babel bundles are cross-origin too (unpkg), and caching
    // those is exactly what makes the site work offline. They're safe to cache
    // because each URL pins an exact version and carries an SRI hash, so the
    // bytes behind a given URL never change. API responses have neither property.
    if (event.request.url.startsWith(API_ORIGIN)) return;

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
