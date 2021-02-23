<template>
  <v-card
    elevation="2"
    outlined
    shaped
  >
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      {{ body }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
});
</script>
