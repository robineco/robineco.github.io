<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-spacer></v-spacer>
    <router-link to="/blog">
      <v-btn text>
        Blog
      </v-btn>
    </router-link>
    <v-divider
      class="divider"
      inset
      vertical
    ></v-divider>
    <router-link to="/projects">
      <v-btn text>
        Projects
      </v-btn>
    </router-link>
    <v-divider
      class="divider"
      inset
      vertical
    ></v-divider>
    <router-link to="/about">
      <v-btn text>
        About
      </v-btn>
    </router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopBar',
  data: () => ({
    //
  }),
});
</script>

<style lang="css" scoped>
.divider {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
