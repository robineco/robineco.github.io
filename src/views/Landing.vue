<template>
  <div class="text-wrapper">
    <p>Hey there <span class="wiggle">👋🏼</span>, I’m Robin</p>
    <div class="progress">
      <v-progress-linear
        :value="value"
        color="lime"
      />
    </div>
    <div class="mt-8">
      <v-btn
        color="primary"
        large
        @click="redirect"
      >Continue</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      value: 0
    }
  },
  mounted () {
    // this.animateProgress()
  },
  methods: {
    animateProgress () {
      setInterval(() => {
        this.value += 4
        if (this.value >= 100) {
          this.$router.push({ name: 'Home' })
        }
      }, 100)
    },
    redirect () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped lang="scss">
.text-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.progress {
  width: 51%;
}
.text-wrapper > p {
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  color: #FFFFFF;
}
@keyframes wiggle {
  0% { transform: rotate(0deg); }
  80% { transform: rotate(0deg); }
  85% { transform: rotate(15deg); }
  95% { transform: rotate(-15deg); }
  100% { transform: rotate(0deg); }
}
.wiggle {
  display: inline-block;
  animation: wiggle 2.5s infinite;
}
</style>
