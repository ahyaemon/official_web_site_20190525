<template lang="pug">
  div
    header
      h1
        nuxt-link.title(to="/") あひゃえもんのページ
    div.menu
      ul
        li(v-for="link in links", :key="link.url")
          nuxt-link(:to="link.url") {{ link.title }}
    hr
    main
      nuxt
    hr
    footer.footer
      small &copy; 2019 あひゃえもん
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"

  @Component
  export default class extends Vue {
    private links = [
      { url: "/about", title: "このサイトについて" },
      { url: "/history", title: "歴史" },
      { url: "/book", title: "本" },
      { url: "/music", title: "自作曲" },
      { url: "/game", title: "自作ゲーム" },
      { url: "/program", title: "自作プログラム" },
      { url: "/sonota", title: "その他" },
    ]

  }

</script>

<style>
  body {
    font-family: 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
  }

  ul {
    padding: 0 0 0 10px;
    margin: 0 0 0 0;
  }

  li {
    list-style-type: none;
  }

  a {
    color: rgb(100, 117, 99);
    text-decoration: underline;
  }

  .title {
    color: black;
    text-decoration: none;
  }

  p {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
</style>