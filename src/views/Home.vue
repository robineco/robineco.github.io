<template>
  <div class="home-wrapper">
    <p>Welcome to my website</p>
    <div class="d-flex justify-center">
      <Terminal />
    </div>
  </div>
</template>

<script>

import Terminal from '../components/window/Terminal'

export default {
  name: 'Home',
  components: {
    Terminal
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  margin-top: 5%;
  p {
    margin-bottom: 4%;
    text-align: center;
    font-size: 36px;
    color: #000000;
  }
}
</style>
