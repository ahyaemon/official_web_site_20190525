<template lang="pug">
  div
    h2 その他
    ul
      li(v-for="link in links" :key="link.url")
        nuxt-link(:to="link.url") {{ link.title }}
    hr
    nuxt
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"

  @Component
  export default class extends Vue {
    private links = [
      { url: "/sonota/github", title: "github" },
      { url: "/sonota/musikui", title: "虫食い算やろうぜ！！" },
      { url: "/sonota/orenorock", title: "俺のロックまとめ" },
    ]
  }
</script>

<style scoped>
</style>
