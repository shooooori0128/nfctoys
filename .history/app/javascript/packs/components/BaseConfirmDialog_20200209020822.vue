<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <template v-if="title != ''">
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            {{ title }}
          </v-card-title>
        </template>

        <v-card-text>
          <slot></slot>
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
            color="primary"
            flat
            @click="dialog = false"
          >
            {{ negativeBtnText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>