self.addEventListener("install", (e) => {
  // console.log("Install!");
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "./image/logo.png",
        "../src/App.vue",
        "../src/main.ts",
        "../src/framework/sub-modules/pages/Navbar.vue",
        "../src/framework/sub-modules/pages/Home.vue",
        "../src/framework/sub-modules/pages/NewProduct.vue",
        "../src/framework/sub-modules/pages/Cart.vue",
        "../src/framework/sub-modules/components/Loader.vue",
        "../src/framework/sub-modules/components/ProductDetail.vue",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`Intercepting fetch request for: ${e.request.url}`);
});
