<template>
  <div class="about-wrapper">
    <p>About Me</p>
    <TechStackCard />
  </div>
</template>

<script>

import TechStackCard from '../components/stack/TechStackCard'

export default {
  name: 'About',
  components: {
    TechStackCard
  },
  metaInfo: {
    title: 'About Me'
  }
}
</script>

<style lang="scss" scoped>
.about-wrapper {
  margin-top: 5%;
  p {
    margin-bottom: 4%;
    text-align: center;
    font-size: 36px;
    color: #000000;
  }
}
</style>
