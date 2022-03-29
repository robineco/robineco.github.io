<template>
  <div id="home" class="d-flex flex-column align-center">
    <div class="title-text d-flex flex-column align-center">
      <p>Hello, I am</p>
      <p id="my-name">Robin Schlund</p>
      <p>Software Engineering Student</p>
    </div>
    <div class="my-image">
      <div class="short-contact d-flex flex-column align-center">
        <div class="line" />
        <div class="contact-container d-flex flex-column align-center justify-center">
          <img
            v-for="service in services"
            :key="service.name"
            alt="nav"
            :src="imageSource(service.image)"
            @click="contact(service.link)"
          />
        </div>
        <div class="line" />
      </div>
      <v-img
          src="@/assets/me.png"
          max-width="334"
          max-height="433"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data: () => ({
    services: [
      {
        name: 'github',
        image: 'github.png',
        link: 'https://github.com/robineco',
      },
      {
        name: 'LinkedIn',
        image: 'linkedin.png',
        link: 'https://www.linkedin.com/in/robin-niclas-schlund-946a87231',
      },
      {
        name: 'Email',
        image: 'email.png',
        link: 'mailto:contact-robin@tutanota.de',
      },
    ],
  }),
  methods: {
    imageSource(image) {
      return require(`../../assets/contact/${image}`)
    },
    contact(link) {
      window.location = link;
    },
  },
}
</script>

<style scoped lang="scss">
.title-text {
  margin-top: 5%;
  p {
    margin: 0;
    font-weight: 400;
    font-size: 20px;
  }
  #my-name {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    text-decoration-line: underline;
  }
  > p:last-of-type {
    margin-top: .25rem;
  }
}
.my-image {
  margin-top: 5rem;
}
.v-image {
  border-radius: 80px 80px 0 0;
}
.short-contact {
  position: absolute;
  margin-top: 2rem;
  margin-left: -10rem;
  .contact-container {
    width: 64px;
    height: 180px;
    background: #66B2F0;
    border-radius: 16px;
    gap: .25rem;
    > img {
      cursor: pointer;
    }
  }
  .line {
    width: 0;
    height: 100px;
    border: 2px solid #FFFFFF;
  }
}
</style>
