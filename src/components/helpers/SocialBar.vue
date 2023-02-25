<template>
  <div class="social-wrapper d-flex flex-column justify-center align-center">
    <div class="vertical-line"></div>
    <div class="icons" data-cursor-hover></div>
    <div class="icons" data-cursor-hover></div>
    <div class="icons" data-cursor-hover></div>
    <div class="vertical-line"></div>
  </div>
</template>

<script>
export default {
  name: "SocialBar"
}
</script>

<style scoped lang="scss">
.social-wrapper {
  gap: .5rem;
  .vertical-line {
    width: 2px;
    height: 120px;
    background-color: darkorange;
    border-radius: 8px;
  }

  .icons {
    width: 20px;
    height: 20px;
    background-color: aqua;
    border-radius: 4px;
  }
}
</style>
