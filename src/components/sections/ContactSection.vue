<template>
  <section id="contact">
    <p class="section-title mb-8" data-cursor-hover>Contact Me 📲</p>
    <div class="cards">
      <CardElement name="GitHub" link="https://github.com/robineco"/>
      <CardElement name="LinkedIn" link="https://www.linkedin.com/in/robin-niclas-schlund-946a87231/"/>
      <CardElement name="Email" link="mailto:contact-robin@tutanota.de"/>
    </div>
  </section>
</template>

<script>
import CardElement from '@/components/helpers/CardElement';
export default {
  name: "ContactSection",
  components: { CardElement }
}
</script>

<style scoped lang="scss">
#contact {
  width: 100%;
  margin-top: 20vh;
  margin-bottom: 10vh;
  .section-title {
    font-size: 32px;
    font-weight: 700;
    color: #F5D579;
  }
  .cards {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
}
@media only screen and (max-width: 960px) {
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
}
</style>
