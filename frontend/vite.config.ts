import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/", //en local
  // base: process.env.NODE_ENV === "production" ? "/static/" : "/",

  base: "/static/", //  Pour que Django trouve les fichiers en prod
  build: {
    outDir: "frontend_build",
  },

  // Tu n’as pas besoin du server.proxy en production car React est précompilé. Donc tu peux rendre la section server optionnelle.
  // Mais si tu veux que ça reste clair etfonctionne en local et en prod avec Docker,
  server: {
    port: 3000,
    // host: true,
    host: "localhost", // 👈 t'empêche d'aller en 192.168.x.x
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});

// host: true permet à Vite de rendre le serveur accessible depuis d'autres appareils sur le réseau local.
// host: 'localhost', // 👈 ou retire carrément la ligne "host"
