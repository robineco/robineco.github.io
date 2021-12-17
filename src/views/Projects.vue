<template>
 <div class="projects-wrapper">
   <p>My Projects</p>
   <v-container>
     <v-row>
       <v-col
         cols="12"
         xs="6"
         sm="4"
         md="4"
         lg="3"
         v-for="project in projects"
         :key="project.id"
       >
         <ProjectCard
          :title="project.title"
          :content="project.content"
          :link="project.link"
         />
       </v-col>
     </v-row>
   </v-container>
 </div>
</template>

<script>
import ProjectCard from '../components/projects/ProjectCard'
import projectJson from '../assets/projects/projects.json'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  metaInfo: {
    title: 'My Projects'
  },
  data () {
    return {
      projects: []
    }
  },
  mounted () {
    this.readJSON()
  },
  methods: {
    readJSON () {
      this.projects = projectJson.projects
    }
  }
}
</script>

<style scoped lang="scss">
.projects-wrapper {
  margin-top: 5%;
  p {
    margin-bottom: 4%;
    text-align: center;
    font-size: 36px;
    color: #000000;
  }
}
</style>
