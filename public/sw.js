if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, t) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let c = {};
    const r = (e) => n(e, a),
      o = { module: { uri: a }, exports: c, require: r };
    s[a] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (t(...e), c));
  };
}
define(["./workbox-7c2a5a06"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "7513745619b0ca23650c7907225ee802",
        },
        {
          url: "/_next/static/VNuhr1xKZNZgTP3WisGrK/_buildManifest.js",
          revision: "02b926c0e0d93f81521380ea4167e5c8",
        },
        {
          url: "/_next/static/VNuhr1xKZNZgTP3WisGrK/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/2e3a737e-6d9d2c0ffbbbc4ae.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/698-4db23ab236dedcbb.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/6a7789fa-ac13102f3dcd954f.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/715-df1c27de4520c560.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/app/layout-76913739cbedfec2.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/app/page-f9cb6056d057a3ca.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/bce60fc1-97c6f64f33809f3b.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/cc3e0619-14434a2ba1ba9985.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/ff48af57-1f7df2d2b2786019.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/framework-8883d1e9be70c3da.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/main-app-2e4803d18fe46f7c.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/main-b7979f02fdcc691f.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/pages/_app-b75b9482ff6ea491.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/pages/_error-7fafba9435aeb6bc.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-39b22fe5a7f6529a.js",
          revision: "VNuhr1xKZNZgTP3WisGrK",
        },
        {
          url: "/_next/static/css/f8470cfcf3e655a2.css",
          revision: "f8470cfcf3e655a2",
        },
        {
          url: "/icon-192x192.png",
          revision: "16a1db7a278083c6522ccda2cc3fd1e8",
        },
        {
          url: "/icon-256x256.png",
          revision: "2a942c56fad08d4a91c6d58ede5ed870",
        },
        {
          url: "/icon-384x384.png",
          revision: "cd342c244ecd17b10e495b1db392609b",
        },
        {
          url: "/icon-512x512.png",
          revision: "5d092f5810ffa20f12e8e59e9c607872",
        },
        { url: "/manifest.json", revision: "b8db8c99eb65c4f1e21a417b3fb07689" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
