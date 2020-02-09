<template>
  <v-container fluid>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs-12>
        <v-subheader>
          NFCタグをかざすと音声を再生します
        </v-subheader>

        <div>
          <v-btn large icon color="red lighten-4">
            <v-icon large style="font-size: 108px;">play_arrow</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      title: "再生"
    }
  }
})
</script>

<style scoped>
.v-btn--icon.v-btn--large {
  width: 220px;
}

.v-btn--large {
  height: 220px;
}
</style>