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
  </v-app>
</template>

<script>

export default {
  name: 'App',
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
</style>
