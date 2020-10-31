<template>
  <div id="app">
    <h1 id="title">Welcome to my introduction page</h1>
    <Teminal />
    <Bottombar />
  </div>
</template>

<script>
import Teminal from './components/Terminal.vue'
import Bottombar from './components/Bottombar.vue'

export default {
  name: 'App',
  components: {
    Teminal,
    Bottombar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1.5rem;
}
#title {
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 1.5rem;
}
</style>
