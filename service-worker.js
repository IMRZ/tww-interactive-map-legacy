importScripts("/tww-interactive-map/precache-manifest.4fcba24637839b29ec6746c1f88b0610.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", (event) => {
  if (event.data.action == "skipWaiting") self.skipWaiting();
});

