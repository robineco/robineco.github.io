<template>
  <v-app>
    <cursor-fx
      color="#ffffff"
      color-hover="#F5D579"
      inside-size="10px"
      outside-size="70px"
    />
    <NavBar />
<!--    <div class="side-bar">-->
<!--      <SocialBar />-->
<!--    </div>-->
    <v-main>
      <MainView/>
    </v-main>
  </v-app>
</template>

<script>
import MainView from './components/MainView';
import { CursorFx } from '@luxdamore/vue-cursor-fx';
// import SocialBar from '@/components/helpers/SocialBar';
import NavBar from '@/components/NavBar';

export default {
  name: 'App',

  components: {
    MainView,
    NavBar,
    // SocialBar,
    'cursor-fx': CursorFx,
  },
};
</script>

<style>
#app {
  font-family: 'Nunito Sans', sans-serif;
}
p {
  margin: 0 !important;
}
.side-bar {
  position: fixed;
  margin-left: 8%;
  margin-top: 20%;
}
</style>
