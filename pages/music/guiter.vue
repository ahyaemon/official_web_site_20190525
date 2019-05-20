<template lang="pug">
  div
    h2 ギター系
    h3 2018
    MusicRecord(title="好きなことだけして生きるにはどうすればいいの", src="/music/guiter/好きなことだけして生きるにはどうすればいいの.mp3", :hasLylics="true")
      p 昨日と同じご飯 同じ時間に食べる
      p 明日も同じご飯 同じ時間に食べる 予定
      br
      p どうしてこんなに代わり映えのない 日々ばかりなの
      p 考えても考えても考えても わからない
      br
      p 鏡の奥の誰か 少しずつ老けてゆく
      p 鏡の前の僕が 少しずつ老けてゆく から
      br
      p 好きなことだけして生きるにはどうすればいいの
      p 考えても考えても考えても わからない
    MusicRecord(title='ヨーグルト', src='/music/guiter/ヨーグルト.mp3', :hasLylics='true')
      p 昨日の夜から 出しっぱなしのヨーグルト
      p もしかしたら 腐ってるかもしれないけれど 飲んでみたよ
      br
      p 最近なんだか暑くって 太陽が暑くって
      p 外に出たら 干からびてしまいそう
      p 外に出られない
      br
      p 早く秋が 訪れないかな
      p 秋が来れば 暑さに怯えることもない
    h3 2017
    MusicRecord(title='かわいそうなにんじん', src='/music/guiter/かわいそうなにんじん.mp3', :hasLylics='true')
      p 可哀そうなにんじんは 今日も一人で暮らしてる
      p 三角コーナーの中で独りぼっち
      br
      p 三角コーナーの中で・・・
      br
      p 成長していた！
      p 誰にも気づかれないように
      p 成長していた！
      br
      p 可哀そうなにんじんは 今日も一人で暮らしてる
      p 可哀そうなにんじんは 今日も一人で暮らしてる
    h3 2015
    MusicRecord(title='なんにもしたくない', src='/music/guiter/なんにもしたくない.mp3', :hasLylics='true')
      p なんにもしたくない なんにもしたくない
      p なんにもしたくない なんにもしたくない
      br
      p 学校に行きたくない 会社に行きたくない
      p なんにもしたくない なんにもしたくない
      br
      p けど
      br
      p 人生って素晴らしい 人生って素晴らしい
      p 人生って素晴らしいと 思ったのさ
      br
      p 何か新しいことを始めようと思って
      p 新しいことを始めようとしたのに
      p 今日も一日を
      p 無駄に過ごしてしまう
      br
      p けど
      br
      p 人生って素晴らしい 人生って素晴らしい
      p 人生って素晴らしいと 思ったのさ
      br
      p ~ 伴奏 ~
      br
      p けど
      br
      p 人生って素晴らしい 人生って素晴らしい
      p 人生って素晴らしいと 思ったのさ
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator"
  import MusicRecord from "~/components/MusicRecord.vue"

  @Component({
    components: {
      MusicRecord,
    },
  })
  export default class extends Vue {}
</script>

<style scoped>
</style>
