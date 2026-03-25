import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Comparoo/",
  server: {
    host: true,
    port: 5175, 
  },
});
