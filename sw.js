// Deliberately network-first, not cache-first. This site has been through
// repeated stale-cache bugs during development; a cache-first worker would
// make every future edit invisible until someone thinks to clear it. This
// worker only ever serves cached content when the network fetch fails
// (i.e. genuinely offline) - installability, without staleness risk.
//
// Bump CACHE_NAME whenever you want previously-cached pages to be forced out.
const CACHE_NAME = 'trojans-bjj-v1';
const APP_SHELL = ['./index.html', './manifest.json'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
