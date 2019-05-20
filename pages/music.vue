<template lang="pug">
  div
    h2 自作曲
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
      { url: "/music/guiter", title: "ギター系" },
      { url: "/music/dtm", title: "DTM系" },
      { url: "/music/miku", title: "初音ミク系" },
    ]
  }
</script>

<style scoped>
</style>
