<template>
  <div class="terminal-wrapper">
    <div class="top-bar d-flex align-content-space-between">
      <img
        src="@/assets/home/terminal/close.svg"
        alt="close"
      />
      <img
        src="@/assets/home/terminal/maximize.svg"
        alt="max"
      />
      <img
        src="@/assets/home/terminal/minimize.svg"
        alt="min"
      />
    </div>
    <div class="spacer"></div>
    <div class="content">
      <div class="content__text">
        <p>user@my-skills: $ bash ./aboutme.sh --my-skills</p>
        <div>
          <p>Over the past few years, I have gained a lot of experience with different technologies.</p>
          <p>During my studies, I specialised in embedded systems combined with AI.</p>
          <p>However, I have the most experience in DevOps and frontend, through work.</p>
        </div>
      </div>
      <div class="content__skills d-flex justify-space-around">
        <div>
          <p>Frontend</p>
          <img src="@/assets/home/terminal/logos/web.svg" alt="web">
        </div>
        <div>
          <p>DevOps</p>
          <img src="@/assets/home/terminal/logos/devops.svg" alt="web">
        </div>
        <div>
          <p>Embedded Systems</p>
          <img src="@/assets/home/terminal/logos/embedded.svg" alt="web">
        </div>
        <div>
          <p>Backend & KI</p>
          <img src="@/assets/home/terminal/logos/backend.svg" alt="web">
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Terminal',
  props: {
    //
  },
  data: () => ({
    //
  }),
  methods: {
    //
  }
})
</script>

<style lang="scss" scoped>
.terminal-wrapper {
  width: 75%;
  height: 486px;
  max-width: 870px;
  background-color: #FFFFFF;
  border-radius: 32px;
  padding: 0.5rem 1rem
}
.spacer {
  width: 100%;
  margin: 5px 0;
  border: 1px solid #E5E5E5;
}

.content__text {
  margin-top: 6%;
  padding: 0 2.5rem;

  > p:first-of-type {
    font-size: 16px;
    line-height: 30px;
    color: #24A924;
  }

  div {
    margin-top: 1rem;
    padding-left: 2rem;
  }
}

.content__skills {
  margin-top: 5%;
  padding: 0 2.5rem;
  width: 100%;
  p {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5rem;
  }
}
</style>
