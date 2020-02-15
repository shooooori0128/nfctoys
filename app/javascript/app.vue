<template>
  <v-app id="app">
    <v-toolbar dark color="red darken-1">
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex xs12 class="text-xs-center">
          <span class="display-1 font-weight-black">NFCToy</span>
        </v-flex>
      </v-layout>
    </v-toolbar>

    <v-container fluid>
      <v-layout align-center justify-center column fill-height>
        <v-flex xs12>
          <router-view />
        </v-flex>
      </v-layout>
    </v-container>

    <v-bottom-nav :active.sync="bottomNav" :value="true" color="red darken-1">
      <v-btn flat dark value="rec" @click.stop="$_pageTransition('/Rec')">
        <span class="white--text">録音</span>
        <v-icon>mic</v-icon>
      </v-btn>

      <v-btn flat dark value="play" @click.stop="$_pageTransition('/')">
        <span class="white--text">読取</span>
        <v-icon>play_arrow</v-icon>
      </v-btn>
    </v-bottom-nav>
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

      this.$router.push(path).catch((error: any) => console.log(error));
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

<style scoped>
.v-card__actions {
  padding: 0px !important;
}
</style>