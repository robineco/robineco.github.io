<template>
<div id="projects" class="projects-wrapper d-flex flex-column align-center">
  <p id="title">My Projects</p>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
      xl="4"
      v-for="project in projects"
      :key="project.name"
    >
      <PCard
        :image="project.image"
        :name="project.name"
        :link="project.link"
      />
    </v-col>
  </v-row>
</div>
</template>
<script>
import PCard from '@/components/projects/PCard';

export default {
  name: 'Projects',
  components: { PCard },
  data: () => ({
    projects: [
      {
        image: 'duden.png',
        name: 'Wort des Tages',
        link: 'https://github.com/robineco/Wort-des-Tages',
      },
      {
        image: 'smartdisplay.png',
        name: 'Smart Display',
        link: 'https://github.com/robineco/smart-display',
      },
      {
        image: 'retroclock.jpeg',
        name: 'RaspberryPi Retro Clock',
        link: 'https://github.com/robineco/RaspberryPi-Retro-Clock',
      },
      {
        image: 'smartdisplay.png',
        name: 'Vuejs Todo App',
        link: 'https://github.com/robineco/vuejs-todo-app',
      },
      {
        image: 'garagedoor.png',
        name: 'Hacking a Garage Door Remote',
        link: 'https://github.com/robineco/Garage-Door-Webserver',
      },
      {
        image: 'nodemcu.png',
        name: 'NodeMcu Led Control',
        link: 'https://github.com/robineco/NodeMcu-Led-Control',
      },
    ]
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
.projects-wrapper {
  max-width: 900px;
  margin: 14vh auto 0 auto;
}
</style>
