<template lang="pug">
  div
    h2 MAGICAL SWITCH PLUS

    p javascriptと、phina.jsを使って作りました。
    br
    p 画面上のボタンを全て押された状態にするとクリアーです。
    p 元ネタのゲーム（マリオRPG内のミニゲーム）がマジカルスイッチという名前らしいので、その発展版ということでプラスを付けました。
    p
      a(href="/game/magical-switch-plus/index.html", target="_blank") → Magical Switch Plus
    br
    p ※ あひゃえもんはLv.10くらいまでしかクリアしていないので、その後の問題がクリア可能かどうかは不明です。
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class extends Vue {
  }
</script>