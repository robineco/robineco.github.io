<template>
<div id="experience" class="experience-wrapper d-flex flex-column align-center">
  <p id="title">Experience</p>
  <v-row>
    <v-col cols="12" xl="6" md="6" sm="6" class="d-flex justify-center">
      <ECard title="Frontend" :skills="frontend" />
    </v-col>
    <v-col cols="12" xl="6" md="6" sm="6"  class="d-flex justify-center">
      <ECard title="Backend" :skills="backend" />
    </v-col>
  </v-row>
</div>
</template>

<script>
import ECard from '@/components/experience/ECard';

export default {
  name: 'Experience',
  components: {
    ECard,
  },
  data: () => ({
    frontend: [
        'HTML',
        'JavaScript',
        'Vue.js',
        'Vuetify',
        'CSS',
        'Typescript',
        'React',
        'Bootstrap',
    ],
    backend: [
        'Java',
        'Node.js',
        'MongoDB',
        'SpringBoot',
        'Python',
        'Express.js',
        'MariaDB',
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
.experience-wrapper {
  margin-top: 14vh;
  .cards {
    width: 100%;
    gap: 2rem;
  }
}
</style>
