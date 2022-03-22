<template>
<div class="pcard-wrapper d-flex flex-column align-center">
  <div class="card-image">
    <v-img
      height="200"
      width="200"
      :src="imageSource"
    />
  </div>
  <p class="card-name">{{name}}</p>
  <div class="links">
    <v-btn outlined color="primary" @click="redirect">GitHub</v-btn>
  </div>
</div>
</template>

<script>
export default {
  name: "PCard",
  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  computed: {
    imageSource () {
      return require(`../../assets/projects/${this.image}`)
    },
  },
  methods: {
    redirect () {
      window.location = this.link
    },
  },
}
</script>

<style scoped lang="scss">
.pcard-wrapper {
  background: #2A2C65;
  border-radius: 16px;
  padding: 2rem;
  .card-name {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
  }
}
.v-image {
  border-radius: 24px;
}
</style>
