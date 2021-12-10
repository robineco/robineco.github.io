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
         v-for="index in 9"
         :key="index"
       >
         <ProjectCard />
       </v-col>
     </v-row>
   </v-container>
 </div>
</template>

<script>
import ProjectCard from '../components/projects/ProjectCard'

export default {
  name: 'Projects',
  components: {
    ProjectCard
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
