import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        sortiment: resolve(root, "sortiment.html"),
        event: resolve(root, "event.html"),
        "om-oss": resolve(root, "om-oss.html"),
        "hitta-oss": resolve(root, "hitta-oss.html")
      }
    }
  }
});
