<template>
<div class="experience-card d-flex flex-column align-center">
  <p>{{title}}</p>
  <div class="list-wrapper d-flex justify-center">
    <ul>
      <li
        v-for="item in getFirstHalf"
        :key="item"
      >
        <span><img src="@/assets/verified.png" alt="v"/></span>
        {{item}}
      </li>
    </ul>
    <ul>
      <li
        v-for="item in getSecondHalf"
        :key="item"
      >
        <span><img src="@/assets/verified.png" alt="v"/></span>
        {{item}}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "ECard",
  props: {
    title: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
  computed: {
    getFirstHalf() {
      const half = Math.ceil(this.skills.length / 2);
      return this.skills.slice(0, half);
    },
    getSecondHalf() {
      const half = Math.ceil(this.skills.length / 2);
      return this.skills.slice(-half);
    }
  }
}
</script>

<style scoped lang="scss">
.experience-card {
  width: 100%;
  background: #2A2C65;
  border-radius: 16px;
  padding: 2rem;
  > p {
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
  }
}
.list-wrapper {
  gap: 10%;
  margin-bottom: 2rem;
  li {
    display: flex;
    gap: .25rem;
    list-style: none;
    font-weight: 300;
    font-size: 20px;
    line-height: 27px;
  }
}
</style>
