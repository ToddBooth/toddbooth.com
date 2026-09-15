// Network-first caching for public site assets and integrity-pinned libraries.
// Sign-in, API responses and arbitrary third-party requests bypass this worker.
const CACHE_PREFIX = 'toddbooth-';
const CACHE_NAME = CACHE_PREFIX + 'v4';
const PRECACHE_URLS = ['/', '/index.html', '/events-data.js', '/manifest.json'];
const STATIC_PATHS = new Set([
    ...PRECACHE_URLS, '/icon-192.png', '/icon-512.png', '/icon-maskable-512.png',
    '/favicon.ico', '/qr_code.png', '/vcard.vcf',
]);

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(PRECACHE_URLS.map(url => new Request(url, { cache: 'reload' })));
        await self.skipWaiting();
    })());
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map(key => caches.delete(key)));
        await self.clients.claim();
    })());
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET' || request.cache === 'no-store'
        || request.headers.has('Authorization') || request.headers.has('Range')) return;

    const url = new URL(request.url);
    const ownAsset = url.origin === self.location.origin && STATIC_PATHS.has(url.pathname);
    const pinnedLibrary = url.origin === 'https://unpkg.com' && Boolean(request.integrity);
    const publicFont = url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com';
    if (!ownAsset && !pinnedLibrary && !publicFont) return;

    // Canonical asset keys also let versioned events-data URLs work offline.
    const key = ownAsset ? url.origin + url.pathname : request;
    const responsePromise = fetch(request);
    event.waitUntil(responsePromise.then(async response => {
        if (!response.ok || response.status === 206
            || /(?:no-store|private)/i.test(response.headers.get('Cache-Control') || '')) return;
        const copy = response.clone();
        const cache = await caches.open(CACHE_NAME);
        await cache.put(key, copy);
    }).catch(() => {})); // A storage failure must not break an online response.

    event.respondWith(responsePromise.catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        return await cache.match(key) || Response.error();
    }));
});
