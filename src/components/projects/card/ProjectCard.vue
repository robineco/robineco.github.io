<template>
  <v-card
    elevation="2"
    outlined
  >
    <v-img
      height="180px"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <v-card-title>
        {{title}}
      </v-card-title>
      <v-card-text class="text-left">
        {{getBodyText}}
      </v-card-text>
      <v-card-actions v-if="link">
        <v-btn
          text
          color="primary"
          @click="learnMore"
        >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
  },
  methods: {
    learnMore() {
      if (this.link) {
        window.location.href = this.link;
      }
    },
  },
  computed: {
    getBodyText(): string {
      if (this.body) return this.body;
      return 'No information';
    },
  },
});
</script>
