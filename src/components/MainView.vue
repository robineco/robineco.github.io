<template>
  <v-container class="content">
    <div class="row">
      <div class="col col-12 col-md-10 col-xl-10 offset-md-2">
        <IntroSection />
      </div>
    </div>
    <div class="row">
      <div class="col col-12 col-md-10 col-xl-10 offset-md-2">
        <AboutSection />
      </div>
    </div>
    <div class="row">
      <div class="col col-12 col-md-10 col-xl-10 offset-md-2">
        <ExperienceSection />
      </div>
    </div>
    <div class="row">
      <div class="col col-12 col-md-10 col-xl-10 offset-md-2">
        <ContactSection />
      </div>
    </div>
  </v-container>
</template>

<script>
import IntroSection from '@/components/sections/IntroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

export default {
  name: "MainView",
  components: {
    IntroSection,
    AboutSection,
    ExperienceSection,
    ContactSection,
  }
}
</script>

<style scoped>
.content {

}
</style>
