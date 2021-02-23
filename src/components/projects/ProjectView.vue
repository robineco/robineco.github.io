<template>
  <v-container class="text-center">
    <v-row class="project-row">
      <v-col cols="12">
        <h2 class="font-weight-light">{{ title }}</h2>
      </v-col>
      <v-col v-for="project in projects" :key="project.title" cols="12" md="6" sm="6" xs="12">
        <ProjectCard
          :title="project.title"
          :body="project.body"
          :link="project.link"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectCard from '@/components/projects/card/ProjectCard.vue';
import projectList from '@/assets/projects/projects';

export default Vue.extend({
  name: 'LandingPageView',
  components: {
    ProjectCard,
  },
  data: () => ({
    title: 'Welcome To My Project Overview',
    projects: projectList,
  }),
});
</script>

<style lang="css" scoped>
.project-row {
  margin-top: 0.5%;
}
</style>
