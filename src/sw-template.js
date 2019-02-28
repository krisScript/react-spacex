if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
 
    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    workbox.routing.registerRoute(
        new RegExp('https://api.spacexdata.com/v3/\a@(launches|missions)\b'),
        new workbox.strategies.CacheFirst({
            cacheName: 'spacex-requests-cache',
            plugins: [
              new workbox.expiration.Plugin({
                // Only cache requests for a day
                maxAgeSeconds: 1 * 24 * 60 * 60,
                // Only cache 10 requests.
              }),
            ]
          })
        
      );
      
 
} else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}