<template>
  <div id="app">
    <p>{{ message }}</p>
    <v-btn color="primary">hogehoge</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>