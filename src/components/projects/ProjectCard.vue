<template>
  <div class="card-wrapper d-flex flex-column justify-space-around">
    <p>{{ title }}</p>
    <div class="card__content">
      <p>{{ content }}</p>
    </div>
    <div class="card__button d-flex justify-center">
      <v-btn
        color="primary"
        elevation="2"
        large
        @click="redirect"
      >Go to Repository</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    //
  }),
  methods: {
    redirect () {
      window.location = this.link
    }
  }
})
</script>

<style lang="scss" scoped>
.card-wrapper {
  height: 352px;
  padding: 1rem;
  background: #FFFFFF;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  border-radius: 32px;

  > p:first-of-type {
    font-size: 20px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .card__content {
    text-align: justify;
    font-size: 14px;
  }

  .card__button {
    margin-top: 1.5rem;
  }
}
</style>
