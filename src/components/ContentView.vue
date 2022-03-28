<template>
<v-container>
  <Overlay v-if="!scroll" />
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
import Overlay from '@/components/overlay/Overlay';

export default {
  name: 'ContentView',
  components: {
    Start,
    About,
    Experience,
    Projects,
    Contact,
    Overlay,
  },
  data: () => ({
    scroll: false,
  }),
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scroll = true;
      window.removeEventListener('scroll', this.handleScroll);
      setTimeout(() => {
        this.scroll = false;
        window.addEventListener('scroll', this.handleScroll);
      }, 1500);
    },
  },
}
</script>

<style scoped lang="scss">

</style>
