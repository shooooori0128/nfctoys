<template>
  <v-app>
    <v-toolbar dark>
      <v-layout align-space-between justify-space-around row fill-height>
        <v-flex class="xs12">
          <v-toolbar-items>
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
          </v-toolbar-items>
        </v-flex>
      </v-layout>
    </v-toolbar>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Vuetify
 */
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

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
  data() {
    return {
      text: "ほげほげ"
    }
  }
}
</script>