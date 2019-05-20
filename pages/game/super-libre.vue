<template lang="pug">
  div
    h2 SUPER LIBRE
    p 全く新しい2Dアクションが完成しました。
    img(src='/img/super-libre/super-libre.png')
    p windows7, 8, vista, 10あたりで動作するはずです。
    br
    p
      a(href='/game/SUPER LIBRE.zip') SUPER LIBRE ダウンロード(zipで直接)
    p
      a(href='https://www.freem.ne.jp/win/game/16042', target='_blank') SUPER LIBRE ダウンロード(ふり～む)
    br
    p クリアすると豪華な特典があるので、是非やってみてください。
    p 頑張れば2分ちょっとで全クリできます。(全6面)
    p
      small HOW画面から7面に行けます（隠し）
    br
    p プレイ方法は、同梱してある説明書に書いてあります。
    br
    p ・開発環境的な話
    p DXライブラリとc++で作りました。
    br
    p ※ ノートン先生がPCにインストールされていると、ウィルスだと判断されるみたいですが、ウィルスではありません。。
    p    (ダウンロード数が少ないうちはそうなるみたいです)
    br
    p 2017/12/2 ver1.01
    p 2017/10/23 ver1.00
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class extends Vue {
  }
</script>

<style scoped>
  img {
    max-width: 100%;
  }

  small {
    font-size: 60%;
  }
</style>
