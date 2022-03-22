<template>
  <div class="d-flex flex-column align-center">
    <div class="title-text d-flex flex-column align-center">
      <p>Hello, I am</p>
      <p id="my-name">Robin Schlund</p>
      <p>Software Engineering Student</p>
    </div>
    <div class="my-image">
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
  name: 'Start'
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
.v-image__image {
  border-radius: 16px;
}
</style>
