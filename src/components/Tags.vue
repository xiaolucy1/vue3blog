<template>
  <aside class="tags w-48 border border-eee p-4 rounded-lg bg-f9f9f9 shadow-sm ml-5">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 text-left">Tags</h3>
    <div class="flex flex-wrap">
      <span
        v-for="tag in allTags"
        :key="tag"
        class="inline-block bg-gray-100 px-2 py-1 text-xs rounded-full mr-1 text-gray-600"
        >{{ tag }}</span
      >
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    allTags: {
      type: Array,
      required: true,
    },
  },
};
</script>