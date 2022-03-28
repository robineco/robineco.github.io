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
      <div class="hover-arrow d-flex">
        <img src="@/assets/about/arrow.png" alt="arrow">
        <p>{{hoverClickText}}</p>
      </div>
      <v-container class="d-flex justify-center">
        <v-row>
          <v-col cols="6" md="4" xl="4">
            <Skills
                title="Frontend"
                image="frontend.png"
                @hover="hoverCardEvent"
                @leave="hoverCardEvent"
            />
          </v-col>
          <v-col cols="6" md="4" xl="4">
            <Skills
                title="Backend"
                image="backend.png"
                @hover="hoverCardEvent"
                @leave="hoverCardEvent"
            />
          </v-col>
          <v-col cols="6" md="4" xl="4">
            <Skills
                title="DevOps"
                image="devops.png"
                @hover="hoverCardEvent"
                @leave="hoverCardEvent"
            />
          </v-col>
          <v-col v-if="active === 'default'" cols="10" offset="1" class="text-center">
            <p class="skill-text">Over the past few years, I have gained a lot of experience with different technologies. During my studies, I specialised in embedded systems combined with AI. However, I have the most experience in DevOps and frontend, through work.</p>
          </v-col>
          <v-col v-if="active === 'frontend'" cols="10" offset="1" class="text-center">
            <p class="skill-text">I love building frontend apps with Vue.js. Through my previous work I was able to gain a lot of experience in web development in a large project. Together with Vuejs I like to use a material design framework like Vuetify or BootstrapVue.</p>
          </v-col>
          <v-col v-if="active === 'backend'" cols="10" offset="1" class="text-center">
            <p class="skill-text">I don't have that much experience in backend development yet. I have developed several backend apps with SpringBoot or Node + Express.js. For databases, I have experience with both SQL and non-SQL databases.</p>
          </v-col>
          <v-col v-if="active === 'devops'" cols="10" offset="1" class="text-center">
            <p class="skill-text">In the past I worked a lot with Docker and Docker Compose, this sparked my interest in devops. At work, I've worked a lot with Azure, from an automated build pipeline to automated deployment. I have also deployed some projects with AWS Elastic Beanstalk.</p>
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
  components: { Skills },
  data: () => ({
    active: 'default',
  }),
  methods: {
    hoverCardEvent(cardName) {
      this.active = cardName;
    },
  },
  computed: {
    hoverClickText() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return 'Click me!'
      }
      return 'Hover over me!'
    }
  }
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
  min-height: 60vh;
  max-width: 900px;
  margin: 14vh auto 0 auto;
  .skills {
    margin-top: 3rem;
    div:first-of-type {
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .skill-text {
      font-size: 18px;
      line-height: 27px;
      max-width: 600px;
    }
  }
}
.hover-arrow {
  margin-left: 18%;
  p {
    margin-top: -10px;
    margin-left: .5rem;
  }
}
</style>
