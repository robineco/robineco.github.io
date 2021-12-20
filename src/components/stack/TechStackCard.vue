<template>
  <v-container class="d-flex justify-center">
    <div class="card-wrapper">
      <div class="card__header">
        <p>My Tech Stack</p>
      </div>
      <div class="card__content">
        <div class="content__stack">
          <p>DevOps</p>
          <TechCard
            name="CI-CD with Azure:"
            image="devops/azure.svg"
          />
          <TechCard
            name="CI-CD with AWS:"
            image="devops/aws.svg"
          />
        </div>
        <div class="content__stack">
          <p>Frontend</p>
          <TechCard
            name="Vuejs App:"
            image="frontend/vue.svg"
          />
          <TechCard
            name="React App:"
            image="frontend/react.svg"
          />
        </div>
        <div class="content__stack">
          <p>Embedded Systems</p>
          <TechCard
            name="Car Noise Classification:"
            image="embedded/noise.svg"
          />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import TechCard from './TechCard.vue'

export default Vue.extend({
  name: 'TechStackCard',
  components: {
    TechCard
  },
  props: {
    //
  },
  data: () => ({
    //
  }),
  methods: {
    //
  }
})
</script>

<style lang="scss" scoped>
.card-wrapper {
  height: 776px;
  width: 100%;
  margin-bottom: 5%;
  padding: 2rem 2.5rem;
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;

  .card__header > p {
    font-size: 24px;
    margin-bottom: 2.5rem;
  }
  .content__stack {
    margin-bottom: 2.5rem;
  }
  .content__stack:last-child {
    margin-bottom: 0.5rem;
  }
}
</style>
