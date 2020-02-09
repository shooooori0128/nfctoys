<template>
  <v-app>
    <v-card 
      class="hide-overflow"
      flat
      style="bottom: 0"
    >
      <v-card-text class="headline text-xs-center pa-5">
        Active: {{ bottomNav }}
      </v-card-text>
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        absolute
        color="transparent"
      >
        <v-btn
          color="primary"
          flat
          value="rec"
        >
          <span>録音</span>
          <v-icon>mic</v-icon>
        </v-btn>

        <v-btn
          color="primary"
          flat
          value="play"
        >
          <span>読取</span>
          <v-icon>play_arrow</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
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