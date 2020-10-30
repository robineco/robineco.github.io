<template>
  <div id="app">
    <Teminal />
  
  </div>
</template>

<script>
import Teminal from './components/Terminal.vue'

export default {
  name: 'App',
  components: {
    Teminal,
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
  margin-top: 4rem;
}
</style>
