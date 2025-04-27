<template>
  <div class="post-detail-page p-4 flex flex-col">
    <div class="flex items-stretch">
      <div class="w-30 mr-2">
        <img
          :src="post.imageUrl"
          alt="Post Preview"
          class="w-full h-auto rounded-md"
        />
      </div>
      <div class="flex-1 flex flex-col ml-2">
        <div class="flex items-center">
          <span class="text-gray-600 text-xs">{{ post.date }}</span>
        </div>
        <div class="flex flex-wrap mt-1">
          <span v-for="tag in post.tags" :key="tag" class="inline-block bg-gray-200 px-2 py-1 text-xs rounded-full mr-1 text-gray-700">{{ tag }}</span>
        </div>
      </div>
    </div>
    <h1 class="text-3xl font-bold my-4">{{ post.title }}</h1>
    <div class="content" v-html="post.content"></div>    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = ref({});

const loadPost = async () => {
  const allPosts = [
    { id: '1', imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'LLM Learning', date: '2023-10-26', tags: ['ai'], content: '<p>This is the content of post 1 about LLM.</p>' },
    { id: '2', imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Another Post', date: '2023-10-25', tags: ['ai'], content: '<p>Content of post 2.</p>' },
    { id: '3', imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Java', date: '2023-10-24', tags: ['java'], content: '<p>Content of post 3 about Java.</p>' },
    { id: '4', imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Post with AI and Java', date: '2023-10-23', tags: ['ai', 'java'], content: '<p>Content of post 4 about AI and Java.</p>' },
    { id: '5', imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Python', date: '2023-10-22', tags: ['python'], content: '<p>Content of post 5 about Python.</p>' },
    { id: '6', imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Vue', date: '2023-10-21', tags: ['vue'], content: '<p>Content of post 6 about Vue.</p>' },
  ];
  const foundPost = allPosts.find((p) => p.id === route.params.id);
  if (foundPost) {
    post.value = foundPost;
  } else {
    post.value = {
      title: 'Post not found',
      content: '<p>The post you are looking for could not be found.</p>',
    };
  }
};

onMounted(loadPost);
</script>
<style scoped>
.content {
  line-height: 1.6;
}
</style>