import { defineWranglerConfig } from "wrangler/experimental-config"

export default defineWranglerConfig({
  assetsDirectory: "./dist",
  minify: true,
  build: { command: "pnpm run build" },
  types: { generate: false },
})
