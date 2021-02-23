<template>
  <v-container class="text-center">
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
    title: 'Blog Page',
    blogPosts: posts,
  }),
});
</script>

<style lang="css" scoped>
.post-row {
  margin-top: 3%;
}
</style>
