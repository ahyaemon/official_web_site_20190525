export default {
  env: {},
  head: {
    title: "あひゃえもんのページ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "ahyaemon official web site" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  modules: [
    // "@nuxtjs/axios",
  ],
  axios: {},
  mode: "spa"
}
