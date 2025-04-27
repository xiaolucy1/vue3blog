<template>
  <div class="flex flex-col h-screen w-full">
    <BlogTitle />
    <BlogImage/>
    <BlogPosts :posts="posts" :all-tags="allTags" :current-page="currentPage" :total-pages="totalPages" :displayed-posts="displayedPosts" @next-page="nextPage" @prev-page="prevPage"/>
  </div>
</template>

<script>
import BlogTitle from './BlogTitle.vue';
import BlogImage from './BlogImage.vue';
import BlogPosts from './BlogPosts.vue';

export default {
  components: {
    BlogTitle,
    BlogImage,
    BlogPosts,
  },
  data() {
    return {
      posts: [
        { id: 1, imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'llm learning', date: '2023-10-26', tags: ['ai'] },
        { id: 2, imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'llm learning', date: '2023-10-25', tags: ['ai'] },
        { id: 3, imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'llm learning', date: '2023-10-24', tags: ['java'] },
        { id: 4, imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'llm learning', date: '2023-10-23', tags: ['ai', 'java'] },
        { id: 5, imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'llm learning', date: '2023-10-22', tags: ['python'] },
        { id: 6, imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'llm learning', date: '2023-10-21', tags: ['vue'] }
      ],
      allTags: ['ai', 'java', 'python', 'vue', 'javascript', 'css'],
      currentPage: 1,
      postsPerPage: 2,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    displayedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.posts.slice(startIndex, endIndex);
    },
  },
  methods: {

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
};
</script>
