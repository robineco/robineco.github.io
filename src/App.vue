<template>
  <v-app>
    <div class="nav-wrapper" v-if="showNavigation">
      <router-link to="home">Home</router-link>
      <router-link to="projects">Projects</router-link>
      <router-link to="about">About me</router-link>
    </div>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
      padless
      color="#142E45"
      class="footer"
    >
      <v-col
        cols="10"
        offset="1"
        class="text-center"
      >
        <strong>Made with ❤️ by robineco</strong>
      </v-col>
      <v-col cols="1">
        <p class="icons">Icons by <span><a href="https://icons8.de">Icons8</a></span></p>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  metaInfo: {
    title: 'Robin Schlund',
    titleTemplate: '%s'
  },
  data: () => ({
    //
  }),
  computed: {
    showNavigation () {
      return this.$route.name !== 'Landing'
    }
  }
}
</script>

<style lang="scss">
#app {
  background: url("./assets/landing/landing.svg") repeat center center fixed;
  background-size: cover;
}

.nav-wrapper {
  display: flex;
  justify-content: center;
  a {
    color: #FFFFFF !important;
    font-size: 20px;
    text-decoration-line: underline;
    margin: 1rem 2rem;
  }
}
.footer {
  color: #FFFFFF !important;
}
.icons {
  margin: 0 !important;
}
</style>
