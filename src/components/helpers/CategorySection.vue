<template>
  <div class="mt-4">
    <p class="tech-header" data-cursor-hover>{{name}}:</p>
    <div class="mt-2">
      <img
          class="mr-1"
          v-for="(tech, index) in technology"
          :src="tech"
          :key="index"
          alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySection",
  props: {
    name: {
      type: String,
    },
    technology: {
      type: Array,
    }
  }
}
</script>

<style scoped lang="scss">
.tech-header {
  font-size: 18px;
  font-weight: 600;
  color: #F5D579;
}
</style>
