<template>
  <div class="tech-wrapper d-flex justify-space-between align-center">
    <v-row>
      <v-col cols="3" class="d-flex align-center">
        {{ name }}
      </v-col>
      <v-col cols="9">
        <v-img :src="imageSource" max-width="569" max-height="75" alt="stack"/>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TechCard',
  props: {
    name: {
      type: String
    },
    image: {
      type: String
    }
  },
  data: () => ({
    //
  }),
  methods: {
    //
  },
  computed: {
    imageSource () {
      return require(`../../assets/about/${this.image}`)
    }
  }
})
</script>

<style lang="scss">
.tech-wrapper {
  width: 100%;
  height: 80px;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  .card__icons {
    margin-right: 4rem;
  }
}
</style>
