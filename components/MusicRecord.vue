<template lang="pug">
  article
    p {{ title }}
    audio(:src="src", controls="")
    p(@click="switchLylics", v-if="hasLylics")
      a 歌詞
      div(class="lylics", v-if="isActive")
        slot
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Prop } from "vue-property-decorator"
    import Component from "vue-class-component"

    @Component
    export default class extends Vue {

        @Prop() private readonly title!: string
        @Prop() private readonly src!: string
        @Prop() private readonly hasLylics!: boolean
        private isActive: boolean = false

        private switchLylics() {
            this.isActive = !this.isActive
        }

    }
</script>

<style scoped>
  .lylics {
    background-color: rgb(215, 247, 225, 0.3);
    border-radius: 4px;
    padding: 10px;
  }

  article {
    margin-bottom: 40px;
  }
</style>