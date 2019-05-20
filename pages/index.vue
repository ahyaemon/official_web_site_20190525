<template lang="pug">
  div
    p ようこそ
    Puzzle
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"
  import Puzzle from "~/components/Puzzle.vue"

  @Component({
    components: {
      Puzzle,
    },
  })
  export default class extends Vue {}
</script>

<style scoped>
</style>
