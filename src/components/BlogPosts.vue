<template>
  <div class="blog-posts flex flex-col w-full p-4">
    <PostList class="post-list flex-1" :posts="displayedPosts" />
    <Tags class="tags w-48 p-4 rounded-lg ml-5" :tags="allTags" />
    <PreNextButtons :current-page="currentPage" :total-pages="totalPages" @next-page="emitNextPage" @prev-page="emitPrevPage" />
  </div>
</template>

<script>
import PostList from "./PostList.vue";
import Tags from "./Tags.vue";
import PreNextButtons from "./PreNextButtons.vue";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    allTags: {
      type: Array,
      required: true,
    },
    displayedPosts: {
      type: Array,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    }
  },
  components: {
    PostList,
    Tags,
    PreNextButtons,
  },
  methods: {
    emitNextPage() {
      this.$emit("next-page");
    },
    emitPrevPage() {
      this.$emit("prev-page");
    },
  }
};
</script>