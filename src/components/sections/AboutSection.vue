<template>
  <section id="about">
    <p class="section-title mb-6" data-cursor-hover>About 👨‍💻</p>
      <v-row>
        <div class="col col-12 col-md-3">
          <v-img
              src="/images/me2.jpeg"
              width="240"
              height="240"
              class="profile"
          />
        </div>
        <div class="col col-12 col-md-6 offset-md-1">
          <p class="about-text">
            At work I mainly build CI/CD scripts in Ruby to optimize workflows.
            For further optimization and identifying problems, I also building and maintaining a monitoring infrastructure.
            To monitor servers, apps and scripts I like to use Grafana/Prometheus and InfluxDB.
            Besides that I love building modern web apps with Vue.js frontends and backends in Node.js.
            In my university I specialized in embedded systems and built projects with microcontrollers and Raspberry pi.
            <br />
            In my free time I am also interested in self hosting different services and experimenting with cloud services.
            In this area I worked with cloud providers like GCloud or Azure.
          </p>
        </div>
      </v-row>
    <v-divider class="mt-4 mb-4" />
  </section>
</template>

<script>
export default {
  name: "AboutSection"
}
</script>

<style scoped lang="scss">
#about {
  width: 100%;
  margin-top: 40vh;
  .section-title {
    font-size: 32px;
    font-weight: 700;
    color: #F5D579;
  }
  .about-text {
    font-size: 18px;
    hyphens: auto;
    text-align: justify;
  }
  .profile {
    border-radius: 12px;
    margin: 0 auto;
  }
}
</style>
