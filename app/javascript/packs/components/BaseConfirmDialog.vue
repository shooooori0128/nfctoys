<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-card>
      <v-card-title
        v-if="title != ''"
        class="headline grey lighten-2"
        primary-title
      >
        {{ title }}
      </v-card-title>

      <v-card-text>
        <v-container fluid>
          <v-layout align-center justify-center row fill-height>
            <v-flex xs12>
              <slot></slot>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          @click="$emit('positive')"
        >
          {{ positiveBtnText }}
        </v-btn>
        <v-btn
          color="secondary"
          flat
          @click="$emit('negative')"
        >
          {{ negativeBtnText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    /**
     * ダイアログの開閉
     */
    isShow: {
      type: Boolean,
      required: true
    },

    /**
     * ダイアログタイトル
     */
    title: {
      type: String,
      required: false,
      default: ""
    },

    /**
     * OKボタンラベル
     */
    positiveBtnText: {
      type: String,
      required: false,
      default: "OK"
    },

    /**
     * キャンセルボタンラベル
     */
    negativeBtnText: {
      type: String,
      required: false,
      default: "キャンセル"
    }
  },

  computed: {
    dialog: {
      get() {
        return this.isShow;
      },
      set(value: boolean) {
        // if (!value) this.$emit("negative");
      }
    }
  }
})
</script>