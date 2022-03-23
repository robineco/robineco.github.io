<template>
<div id="about" class="about-wrapper d-flex flex-column align-center">
  <p id="title">About Me</p>
  <v-row>
    <v-col class="d-flex justify-center">
      <div class="about-image">
        <v-img
            max-width="300"
            max-height="300"
            src="@/assets/about.svg"
        />
      </div>
    </v-col>
    <v-col>
      <v-container class="d-flex justify-center">
      <v-row>
        <v-col cols="6" md="4" xl="4">
          <Skills title="Frontend" image="frontend.png" />
        </v-col>
        <v-col cols="6" md="4" xl="4">
          <Skills title="Backend" image="backend.png" />
        </v-col>
        <v-col cols="6" md="4" xl="4">
          <Skills title="DevOps" image="devops.png" />
        </v-col>
        <v-col cols="10" offset="1" class="text-center">
          <p id="skill-text">Over the past few years, I have gained a lot of experience with different technologies. During my studies, I specialised in embedded systems combined with AI. However, I have the most experience in DevOps and frontend, through work.</p>
        </v-col>
      </v-row>
      </v-container>
    </v-col>
  </v-row>
</div>
</template>

<script>
import Skills from '@/components/about/Skills';

export default {
  name: 'About',
  components: { Skills }
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
.about-wrapper {
  max-width: 900px;
  margin: 14vh auto 0 auto;
  .skills {
    margin-top: 3rem;
    div:first-of-type {
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    #skill-text {
      font-size: 18px;
      line-height: 27px;
      max-width: 600px;
    }
  }
}
</style>
