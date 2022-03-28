<template>
<div class="card-wrapper text-center" @mouseover="hoverEvent" @mouseleave="leaveEvent">
  <v-img
      width="80"
      height="80"
      :src="imageSource"
  />
  <p id="card-title">{{title}}</p>
</div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageSource () {
      return require(`../../assets/about/${this.image}`)
    },
  },
  methods: {
    hoverEvent() {
      this.$emit('hover', this.title.toLowerCase());
    },
    leaveEvent() {
      this.$emit('leave', 'default');
    }
  },
}
</script>

<style scoped lang="scss">
.card-wrapper {
  background-color: #2A2C65;
  width: 8rem;
  height: 8rem;
  border-radius: 16px;
  cursor: help;
  .v-image {
    margin: 0 auto;
  }
  #card-title {
    margin: 0;
  }
}
.card-wrapper:hover {
  transform: scale(1.2) perspective(1px)
}
</style>
