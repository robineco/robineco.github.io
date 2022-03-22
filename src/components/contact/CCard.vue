<template>
<div class="contact-card d-flex flex-column justify-center align-center">
  <v-img width="48" height="48" :src="imageSource" />
  <p class="service-name">{{name}}</p>
  <v-btn outlined color="primary" @click="redirect">Visit Profile</v-btn>
</div>
</template>

<script>
export default {
  name: "CCard",
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
      return require(`../../assets/contact/${this.image}`)
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
.contact-card {
  max-width: 40vh;
  background: #2A2C65;
  border-radius: 16px;
  padding: 2rem;
  .service-name {
    margin: 1rem 0;
  }
}
</style>
