<template>
  <v-container class="text-center">
    <v-col cols="12">
      <h2 class="font-weight-light">{{ title }}</h2>
    </v-col>
    <v-row
      align="center"
      justify="center"
      class="post-row"
    >
      <v-col v-for="post in blogPosts" :key="post.title" md="8">
        <BlogCard :title="post.title" :body="post.body" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import BlogCard from '@/components/blog/card/BlogCard.vue';
import posts from '@/assets/blog/posts';

export default Vue.extend({
  name: 'BlogView',
  components: {
    BlogCard,
  },
  data: () => ({
    title: 'Welcome To My Blog',
    blogPosts: posts,
  }),
});
</script>

<style lang="css" scoped>
.post-row {
  margin-top: 0.5%;
}
</style>
