<template lang="pug">
  div
    h2 初音ミク系
    p 音量でかいかも
    h3 2017
    MusicRecord(title="山茶花", src="/music/miku/山茶花.mp3" :hasLylics="false")
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import MusicRecord from "~/components/MusicRecord.vue"

  @Component({
      components: {
          MusicRecord,
      }
  })
  export default class extends Vue {
  }
</script>