<template>
  <div>
    <v-container fluid>
      <v-layout align-center justify-center column fill-height>
        <v-flex xs-12>
          <v-subheader class="title">
            NFCタグをかざし、ボタンを押しながら喋ってください。ボタンを離すと録音が停止されます。
          </v-subheader>
        </v-flex>

        <v-flex xs-12>
          <v-btn large icon color="red lighten-4" @touchstart="recStart()" @touchend="isSave()">
            <v-icon large style="font-size: 108px;">fas fa-microphone-alt</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <base-confirm-dialog 
      :isShow="isShowBaseConfirmDialog"
      @positive="saveNFC()"
      @negative="isShowBaseConfirmDialog = false"
    >
      今話した内容をNFCタグに記録します。よろしいですか？
    </base-confirm-dialog>
  </div>
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
      console.log("確認")
    },

    /**
     * NFCタグに録音した内容を保存する
     */
    saveNFC() {
      console.log("保存");
    }
  }
})
</script>

<style scoped>
.v-btn--icon.v-btn--large {
  width: 220px;
}

.v-btn--large {
  height: 220px;
}
</style>