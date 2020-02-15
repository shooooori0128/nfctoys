<template>
  <v-layout align-center justify-center column pt-5>
    <v-flex xs12>
      <v-subheader class="title">
        NFCタグをかざすと音声を再生します
      </v-subheader>
      <div class="text-xs-center">
        <v-btn large icon color="red lighten-4" @click="readNFC()">
          <v-icon large style="font-size: 108px;">play_arrow</v-icon>
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      title: ""
    }
  },

  methods: {
    /**
     * NFCタグの内容を読み込み、実行する
     */
    readNFC() {
      console.log("NFCタグ読取")
    }
  }
})
</script>

<style scoped>
.v-btn--icon.v-btn--large {
  width: 220px !important;
}

.v-btn--large {
  height: 220px !important;
}
</style>