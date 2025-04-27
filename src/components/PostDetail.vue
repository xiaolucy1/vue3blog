<template>
  <router-link :to="`/post/${post.id}`">
  <div class="bg-f9f9f9 border border-eee p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg">
    <div class="flex items-stretch">
      <div class="w-30 mr-2">
        <img :src="post.imageUrl" alt="Post Preview" class="w-full h-auto rounded-md" />
      </div>
      <div class="flex-1 flex flex-col ml-2">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-semibold text-gray-800">{{ post.title }}</h2>
        </div>        
        <div class="flex items-center">
          <span class="text-gray-600 text-xs">{{ post.date }}</span>
        </div>
        <div class="flex flex-wrap mt-1">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="inline-block bg-gray-200 px-2 py-1 text-xs rounded-full mr-1 text-gray-700"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
