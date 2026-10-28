import { bindings, defineConfig } from "cf/config"

// Deployment configuration for this account; secrets are uploaded separately.
export default defineConfig({
  accountId: "7ca8da6844637491f76843466d71c54c",
  worker: {
    name: "openlist-worker",
    entrypoint: "src/backend/worker.ts",
    compatibilityDate: "2026-08-04",
    compatibilityFlags: ["nodejs_compat"],
    workersDev: true,
    domains: ["openlist.2692268.xyz"],
    previewUrls: false,
    assets: { runWorkerFirst: ["/", "/index.html"] },
    env: {
      ENVIRONMENT: bindings.text("production"),
      DB_FORMAT: bindings.text("map"),
      DB_DRIVER: bindings.text("kv"),
      DB_CIPHER: bindings.text("none"),
      CACHE_ENABLED: bindings.text("true"),
      CACHE_DRIVER: bindings.text("db"),
      CACHE_FILE_TREE: bindings.text("true"),
      CACHE_DOWNLOAD_LINK: bindings.text("false"),
      CACHE_TTL: bindings.text("0"),
      CACHE_LINK_TTL: bindings.text("5"),
      CACHE_EXCLUDE_DRIVERS: bindings.text("virtual,alias,url_tree,strm,chunk"),
      SINGLEFLIGHT: bindings.text("auto"),
      JWT_SECRET: bindings.secret(),
      ADMIN_PASS: bindings.secret(),
      ASSETS: bindings.assets(),
      KV: bindings.kv({ id: "0cebab5e71f14ae08e7812dabf9005b8" }),
    },
  },
})
