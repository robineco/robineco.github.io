<template>
<v-container>
  <Start />
  <About />
  <Experience />
  <Projects />
  <Contact />
</v-container>
</template>

<script>
import Start from '@/components/start/Start';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';

export default {
  name: 'ContentView',
  components: {
    Start,
    About,
    Experience,
    Projects,
    Contact,
  },
}
</script>

<style scoped lang="scss">

</style>
