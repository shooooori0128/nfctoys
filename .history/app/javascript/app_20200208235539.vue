<template>
  <v-app>
    <router-view />
    <v-tabs
      centered
      color="cyan"
      dark
      icons-and-text
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab href="#tab-1">
        Recents
        <v-icon>phone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Favorites
        <v-icon>favorite</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
        <v-icon>account_box</v-icon>
      </v-tab>

      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Vuetify
 */
import Vuetify from 'vuetify';

Vue.use(Vuetify);

/**
 * VueRouter
 */
import VueRouter from 'vue-router';

// const router = new VueRouter({
//   routes: [
//     {
//       path: '/',
//       component: 
//     }
//   ]
// });

// Vue.use(VueRouter)

export default {
  // router
}
</script>