<template>
  <section>
    <div class="intro">
      <p class="hello">Hi there 👋🏼 I'm</p>
      <p class="name" data-cursor-hover>Robin Schlund</p>
      <div class="text-section">
        <p>I like to work on full stack apps!</p>
        <p class="sub-header">
          I am a software engineer that loves challenges and likes to improve.
          For work I am developing CI/CD tools & building up a monitoring infrastructure.
          I enjoy the technical combination of full stack apps and deploying them in the cloud.
        </p>
      </div>
      <v-divider class="mt-4 mb-4" />
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroSection"
}
</script>

<style scoped lang="scss">
.intro {
  width: 100%;
  margin-top: 30vh;
  .hello {
    font-size: 18px;
  }
  .name {
    font-size: 48px;
    font-weight: 700;
    color: #F5D579;
  }
  .text-section {
    font-size: 40px;
    width: 60%;
    hyphens: auto;
    text-align: justify;
  }
  .sub-header {
    font-size: 20px;
  }
}
@media only screen and (max-width: 960px) {
  .text-section {
    width: 100% !important;
  }
}
</style>
