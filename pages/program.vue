<template lang="pug">
  div
    h2 自作プログラム
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
      { url: "/program/tuner", title: "TUNER" },
      { url: "/program/key-changer", title: "ギターコード移調確認" },
    ]
  }
</script>

<style scoped>
</style>
