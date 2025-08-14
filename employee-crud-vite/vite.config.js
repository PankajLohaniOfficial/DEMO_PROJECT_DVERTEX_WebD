import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/DEMO_PROJECT_DVERTEX_WebD/employee-crud-vite", // <-- your repo name here, with leading and trailing slash
});
