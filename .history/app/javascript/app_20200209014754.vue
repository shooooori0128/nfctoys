<template>
  <v-app>
    <v-card class="hide-overflow" height="1200px" flat>
      <v-card-text>
        <v-container>
          <v-layout align-center justify-center column fill-height>
            <v-flex xs12>
              <router-view />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-bottom-nav :active.sync="bottomNav" :value="true" color="red darken-1">
          <v-btn flat dark value="rec" @click.stop="$router.push('/Rec')">
            <span class="white--text">録音</span>
            <v-icon>mic</v-icon>
          </v-btn>

          <v-btn flat dark value="play" @click.stop="$router.push('/')">
            <span class="white--text">読取</span>
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </v-bottom-nav>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

/**
 * Vuetify
 */
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

/**
 * VueRouter
 */
import VueRouter from "vue-router";
import Play from "./packs/pages/Play.vue";
import Rec from "./packs/pages/Rec.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Play
    },
    {
      path: "/Rec",
      component: Rec
    }
  ]
});

Vue.use(VueRouter);

Vue.mixin({
  methods: {
    $_pageTransition(path: string) {
      if (this.$route.path == path) return;

      this.$router.push("/Rec").catch((error: any) => console.log(error));
    }
  }
});

export default {
  router,
  data() {
    return {
      bottomNav: "play"
    };
  }
};
</script>