import { defineNuxtConfig } from "nuxt";
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
  meta: {
    meta: [
      {
        name: "facebook-domain-verification",
        content: "g4ux8mc3n615kr0bgfb1wqy76cur3n",
      },
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    script: [
      {
        src: "https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_17892_10.c17b29db9b72a714c233b1d7ca77e813.js",
      },
      {
        children: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '5503623943086293');
        fbq('track', 'PageView');`,
      },
    ],
    noscript: [
      {
        children:
          '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=5503623943086293&ev=PageView&noscript=1"/>',
      },
    ],
  },
  server: {
    port: 3002, //端口号
  },
  postcss: {
    plugins: {
      "postcss-px-to-viewport": {
        unitToConvert: "mpx",
        viewportWidth: 750,
      },
      "postcss-px-to-viewport-8-plugin": {
        unitToConvert: "ppx",
        viewportWidth: 1920,
      },
    },
  },
});
