<template>
  <div class="w-full p-4 fixed bottom-0 left-0 flex justify-center">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="bg-gray-100 text-gray-700 px-4 py-2 rounded disabled:opacity-50 mr-2"
    >
      Previous Page
    </button>
    <span class="mx-2">Page {{ currentPage }}</span>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="bg-gray-100 text-gray-700 px-4 py-2 rounded disabled:opacity-50 ml-2"
    >
      Next Page
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    
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