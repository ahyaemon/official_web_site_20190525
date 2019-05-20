<template lang="pug">
  div
    h2 自作ゲーム
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
      { url: "/game/super-libre", title: "SUPER LIBRE" },
      { url: "/game/magical-switch-plus", title: "MAGICAL SWITCH PLUS" },
    ]
  }
</script>

<style scoped>
</style>
