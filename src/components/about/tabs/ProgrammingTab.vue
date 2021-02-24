<template>
  <div class="programming-tab text-left">
    <v-card
      elevation="2"
      outlined
      max-width="600"
      min-height="260"
    >
      <v-card-title>
        {{ name }}
      </v-card-title>
      <v-card-text class="content">
        <p>{{ text }}</p>
        <ul>
          <li v-for="technology in technologies" :key="technology">
            {{ technology }}
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import introduction from '@/assets/about/introduction';

export default Vue.extend({
  name: 'ProgrammingTab',
  data: () => ({
    name: introduction.name,
    text: introduction.text,
    technologies: introduction.technologies,
  }),
});
</script>

<style lang="scss" scoped>
.programming-tab {
  display: inline-block;
}
.content {
  font-size: 1rem;
  p {
    font-size: 1.1rem;
  }
}
ul li{
  float: left;
  width: 50%;//helps to determine number of columns, for instance 33.3% displays 3 columns
}
ul{
  margin-top: 1.5rem;
  list-style-type: disc;
}
</style>
