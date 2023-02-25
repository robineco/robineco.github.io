<template>
  <div class="contact-card">
    <p class="header">{{name}}</p>
    <v-btn depressed @click="redirect" data-cursor-hover>
      Visit Profile
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "CardElement",
  props: {
    name: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  methods: {
    redirect() {
      window.location = this.link
    }
  }
}
</script>

<style scoped lang="scss">
.contact-card {
  width: 10rem;
  height: 10rem;
  border: 2px solid #F5D579;
  border-radius: 12px;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin: 0 auto;
  .header {
    font-size: 22px;
    font-weight: 600;
  }
}
</style>
