<template>
  <v-layout align-center justify-center column pt-5>
    <v-flex xs12>
      <v-subheader class="title">
        ボタンを押しながら喋ってください
      </v-subheader>

      <div class="text-xs-center">
        <v-btn large icon color="red lighten-4" @touchstart.prevent="recStart()" @touchend.prevent="isSave()">
          <v-icon large style="font-size: 108px;">fas fa-microphone-alt</v-icon>
        </v-btn>
      </div>
    </v-flex>

    <base-confirm-dialog 
      :isShow="isShowBaseConfirmDialog"
      @positive="saveNFC()"
      @negative="isShowBaseConfirmDialog = false"
    >
      <p class="subheading">今話した内容をNFCタグに記録します。</p>
      <p class="subheading">よろしいですか？</p>
    </base-confirm-dialog>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

import BaseConfirmDialog from "../components/BaseConfirmDialog.vue";

export default Vue.extend({
  components: {
    baseConfirmDialog: BaseConfirmDialog
  },

  data() {
    return {
      isShowBaseConfirmDialog: false
    }
  },

  methods: {
    /**
     * ボタンが押されている間録音を開始する
     */
    recStart() {
      console.log("録音中");
    },

    isSave() {
      console.log("確認");

      this.isShowBaseConfirmDialog = true;
    },

    /**
     * NFCタグに録音した内容を保存する
     */
    saveNFC() {
      this.isShowBaseConfirmDialog = false;

      console.log("保存");
    }
  }
})
</script>

<style scoped>
.v-btn--icon.v-btn--large {
  width: 220px !important;
}

.v-btn--large {
  height: 220px !important;
}
</style>