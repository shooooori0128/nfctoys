<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div>
          <v-btn icon flat dark>
            <v-icon x-large>play-arrow</v-icon>
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