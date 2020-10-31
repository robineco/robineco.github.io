<template>
  <div id="app">
    <h1 class="gradient-border" id="title">Welcome to my introduction page</h1>
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
}
#title {
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 1.5rem;
  min-width: 305px;
}
.gradient-border {
  --border-width: 3px;
  width: 60%;
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  font-family: Lato, sans-serif;
  font-size: 2.5rem;
  text-transform: uppercase;



    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 4s alternate infinite;
  
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>
