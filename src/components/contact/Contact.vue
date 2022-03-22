<template>
<div class="contact-wrapper d-flex flex-column align-center">
  <p id="title">Contact Me</p>
  <v-row>
    <v-col
      cols="12"
      md="4"
      xl="4"
      class="d-flex justify-center"
      v-for="service in services"
      :key="service.name">
      <CCard :name="service.name" :image="service.image" :link="service.link" />
    </v-col>
  </v-row>
</div>
</template>

<script>
import CCard from '@/components/contact/CCard.vue';

export default {
  name: "Contact",
  components: { CCard },
  data: () => ({
    services: [
      {
        name: 'GitHub',
        image: 'github.png',
        link: 'https://github.com/robineco',
      },
      {
        name: 'LinkedIn',
        image: 'linkedin.png',
        link: 'https://www.linkedin.com/in/robin-niclas-schlund-946a87231',
      },
      {
        name: 'Email',
        image: 'email.png',
        link: '',
      },
    ],
  }),
}
</script>

<style scoped lang="scss">
#title {
  margin-bottom: 5vh;
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  color: #66B2F0;
}
.contact-wrapper {
  margin-top: 14vh;
}
</style>
