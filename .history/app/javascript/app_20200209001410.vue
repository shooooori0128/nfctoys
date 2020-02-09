<template>
  <v-app>

    <v-container fluid>
      <v-layout>
        <v-flex class="xs12">
          <v-tabs
            centered
            color="cyan"
            dark
            icons-and-text
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab href="#tab-1">
              登録
              <v-icon>mic</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
              読取
              <v-icon>play_arrow</v-icon>
            </v-tab>

            <v-tab-item
              v-for="i in 2"
              :key="i"
              :value="'tab-' + i"
            >
              <v-card flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
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