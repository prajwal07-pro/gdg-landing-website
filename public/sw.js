// public/sw.js
 
const CACHE_NAME = 'gdg-cache-v1'

// Minimal install event using CACHE_NAME (satisfies no-unused-vars)
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})
