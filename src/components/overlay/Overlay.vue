<template>
<div class="overlay-wrapper d-flex flex-column justify-center align-center">
  <div class="img-wrapper d-flex justify-center">
    <img alt="nav" src="@/assets/overlay/home.png" @click="navigate('home')" />
    <img alt="nav" src="@/assets/overlay/about.png" @click="navigate('about')" />
    <img alt="nav" src="@/assets/overlay/experience.png" @click="navigate('experience')" />
    <img alt="nav" src="@/assets/overlay/projects.png" @click="navigate('projects')" />
    <img alt="nav" src="@/assets/overlay/contact.png" @click="navigate('contact')" />
  </div>
</div>
</template>

<script>
export default {
  name: "Overlay",
  methods: {
    navigate(id) {
      window.location = `#${id}`;
    },
  },
}
</script>

<style scoped lang="scss">
.overlay-wrapper {
  position: fixed;
  z-index: 10;
  width: 295px;
  height: 55px;
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
  background: rgba(102, 178, 240, 0.3);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 20px;
}
.img-wrapper {
  gap: 14px;
  > img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
}
</style>
