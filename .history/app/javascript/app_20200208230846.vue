<template>
  <v-app>
    <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default {
  data() {
    return {
      
    }
  }
}
</script>