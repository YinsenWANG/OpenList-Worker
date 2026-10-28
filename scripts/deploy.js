#!/usr/bin/env node
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"

const args = process.argv.slice(2)
if (args.includes("--help") || args.includes("-h")) {
  console.log("OpenList Cloudflare deployment: node scripts/deploy.js [--skip-build]\nUses cf deploy; --skip-build deploys existing cf Build Output.")
  process.exit(0)
}
const result = spawnSync("cf", ["deploy", ...args.map(arg => arg === "--skip-build" ? "--prebuilt" : arg)], {
  cwd: fileURLToPath(new URL("../", import.meta.url)),
  stdio: "inherit",
})
if (result.error) throw result.error
process.exit(result.status ?? 1)
