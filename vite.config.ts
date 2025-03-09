import { resolve } from "path";
import { defineConfig } from "vite";
import fs from "fs";

function generateEntryPoints(): Record<string, string> {
  const rootDir = resolve(__dirname);
  const files = fs
    .readdirSync(rootDir)
    .filter((file) => file.endsWith(".html"));

  const entryPoints: Record<string, string> = {};

  files.forEach((file) => {
    const name = file.replace(/\.html$/, "");
    entryPoints[name] = resolve(rootDir, file);
  });

  return entryPoints;
}

export default defineConfig({
  base: "./",
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...generateEntryPoints(),
      },
    },
  },
});
