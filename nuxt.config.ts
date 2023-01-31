import profile from "./package.json";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  vite: {
    mode: process.env.NODE_ENV,
    envDir: "./environments/",
    envPrefix: "__",
    define: {
      _VERSION_: JSON.stringify(profile.version),
    },
  },
  postcss: {
    plugins: {
      // "postcss-px-to-viewport": {
      //   unitToConvert: "mpx",
      //   viewportWidth: 750,
      // },
      "postcss-px-to-viewport-8-plugin": {
        unitToConvert: "px",
        viewportWidth: 375,
      },
    },
  },
});
