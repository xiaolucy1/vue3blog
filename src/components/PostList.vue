<template>
  <div class="post-list flex-1">
    <div class="post-detail flex flex-col gap-5 p-4 shadow-md">
      <PostDetail
        v-for="post in displayedPosts"
        :key="post.id"
        :post="post"
      />
    </div>
    <PreNextButtons
      :current-page="currentPage"
      :total-pages="totalPages"
      @next-page="nextPage"
      @prev-page="prevPage"
    />
  </div>
</template>

<script>
import PostDetail from './PostDetail.vue';
import PreNextButtons from './PreNextButtons.vue';

export default {
  name: 'PostList',
  components: {
    PostDetail,
    PreNextButtons,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    displayedPosts: {
      type: Array,
      required: true,
    }
  },
  emits: ['next-page', 'prev-page'],
  methods: {
    nextPage() {
      this.$emit('next-page');
    },
    prevPage() {
      this.$emit('prev-page');
    },
  },
};
</script>