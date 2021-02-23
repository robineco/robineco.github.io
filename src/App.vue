<template>
  <v-app>
    <TopBar v-if="!hideOnLandingPage" />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import LandingPageView from '@/components/views/LandingPageView.vue';
import TopBar from '@/components/navigation/TopBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TopBar,
  },
  data: () => ({
    //
  }),
  computed: {
    hideOnLandingPage() {
      return this.$route.path === '/';
    },
  },
});
</script>
