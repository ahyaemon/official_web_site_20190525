<template lang="pug">
  div#puzzle
    div.cell(v-for="(deck, ideck) in decks", :key="ideck", @click="clicked(ideck)")
      div.card(v-for="(card, icard) in deck", :key="icard") {{ card.char }}
    p.clear-message(v-if="correct") クリアしたからと言って特に何もない
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  class Card {
    constructor(readonly id: number, readonly char: string) {}
  }

  @Component
  export default class extends Vue {
    chars: Array<string> = ["あ", "ひ", "ゃ", "え", "も", "ん"]
    decks: Array<Array<Card>> = new Array()

    private mounted() {
      const deck1 = this.chars.map((c, i) => {
        return new Card(i, c)
      }).reverse()
      this.decks.push(deck1)
      for(let i = 0; i < this.chars.length - 1; i++) {
        this.decks.push(new Array<Card>())
      }
    }

    private clicked(i: number) {
      const deck = this.decks[i]
      if(deck.length == 0){
        return
      }
      const nextDeck = this.decks[(i + 1) % this.decks.length]
      const card = deck.pop()
      nextDeck.push(card!)
    }

    get correct(): boolean {
      const expected = this.chars.join("")
      const actual = this.decks.map((deck, ideck) => {
          return (deck.length == 0) ? "" : deck[0].char
      }).join("")
      return actual == expected
    }
  }
</script>

<style scoped>
  #puzzle {
    margin-top: 100px;
  }

  .cell {
    position: relative;
    height: 40px;
    width: 40px;
    display: inline-block;
  }

  .card {
    margin: 0;
    padding: 0;
    font-size: 30px;
    position: absolute;
  }

  .clear-message {
    color: red;
  }
</style>
