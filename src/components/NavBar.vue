<template>
  <div class="navbar">
    <h3 class="font-weight-medium" @click="move('about')" data-cursor-hover>About</h3>
    <h3 class="font-weight-medium" @click="move('experience')" data-cursor-hover>Experience</h3>
<!--    <h3 class="font-weight-medium" @click="move('projects')" data-cursor-hover>Projects</h3>-->
    <h3 class="font-weight-medium" @click="move('contact')" data-cursor-hover>Contact</h3>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    move(id) {
      window.location.hash = id;
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #F5D579;
  float: right;
  margin: .5rem 0rem .5rem 0;
}
</style>
