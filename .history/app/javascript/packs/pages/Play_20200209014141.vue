<template>
  <v-container fluid>
    <v-layout align-center justify-center column fill-height>
      <v-flex xs-12>
        <v-subheader class="title">
          <span>NFCタグを</span>
          <span>かざすと</span>
          <span>音声を</span>
          <span>再生します</span>
        </v-subheader>
      </v-flex>

      <v-flex xs-12>
        <v-btn large icon color="red lighten-4">
          <v-icon large style="font-size: 108px;">play_arrow</v-icon>
        </v-btn>
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