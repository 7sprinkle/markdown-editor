const CacheName = "Cache:v1";

self.addEventListener("install", (event) => {
  console.log("ServiceWorker install:", event);
});

const networkFallingBackToCache = async (request) => {
  const cache = await caches.open(CacheName);
  try {
    const respons = await fetch(request);
    await cache.put(request, respons.clone());
    return respons;
  } catch (err) {
    console.error(err);
    return cache.match(request);
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(networkFallingBackToCache(event.request));
});
