<template>
  <div id="app">
    <p>{{ message }}</p>
    <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>
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