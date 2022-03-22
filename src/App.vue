<template>
  <v-app>
    <v-main>
      <ContentView/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import ContentView from './components/ContentView';
import Footer from '@/components/footer/Footer';

export default {
  name: 'App',
  components: {
    ContentView,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application {
  background-color: var(--v-background-base) !important;
}
</style>
