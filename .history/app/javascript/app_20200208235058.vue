<template>
  <v-app>
    <router-view />
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

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: 
    }
  ]
});

Vue.use(VueRouter)

export default {
  router
}
</script>