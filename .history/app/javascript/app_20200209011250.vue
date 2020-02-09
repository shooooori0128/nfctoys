<template>
  <v-app>
    <v-card 
      class="hide-overflow"
      flat
    >
      <v-card-text>
        <router-view />
      </v-card-text>

      <v-card-actions>
        <v-bottom-nav
          :active.sync="bottomNav"
          :value="true"
          color="red"
        >
          <v-btn
            color="red darken-2"
            flat
            value="rec"
          >
            <span class="white--text">録音</span>
            <v-icon>mic</v-icon>
          </v-btn>

          <v-btn
            color="red darken-2"
            flat
            value="play"
          >
            <span class="white--text">読取</span>
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </v-bottom-nav>
      </v-card-actions>
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
import Play from './packs/pages/Play.vue';
import Rec from './packs/pages/Rec.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Play
    },
    {
      path: '/Rec',
      component: Rec
    }
  ]
});

Vue.use(VueRouter)

export default {
  router,
  data () {
    return {
      bottomNav: 'play'
    }
  }
}
</script>