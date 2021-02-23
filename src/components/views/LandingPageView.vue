<template>
    <v-container class="text-center">
      <v-col cols="12">
        {{title}}
      </v-col>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LandingPageView',
  data: () => ({
    title: 'Landing Page',
  }),
  mounted() {
    this.$router.push('/projects');
  },
});
</script>

<style lang="css" scoped>
.landing-page {
  text-align: center;
}
</style>
