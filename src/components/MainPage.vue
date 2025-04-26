<template>
  <div class="flex flex-col items-center w-70 mx-auto">
    <header class="text-center p-5 w-full">
      <h1 class="text-2xl font-bold">My Blog</h1>
    </header>
    <div class="w-full mb-5">
      <img src="https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Image" class="w-full h-24 object-cover" />
    </div>
    <div class="flex w-full">
      <div class="flex-3 flex flex-col gap-5 shadow-md">
        <div v-for="post in displayedPosts" :key="post.id" class="bg-f9f9f9 border border-eee p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg">
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
                <span v-for="tag in post.tags" :key="tag" class="inline-block bg-gray-200 px-2 py-1 text-xs rounded-full mr-1 text-gray-700">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="w-48 border border-eee p-4 rounded-lg bg-f9f9f9 shadow-sm ml-5">
        <h3 class="text-lg font-semibold mb-2 text-gray-800 text-left">Tags</h3>
        <div class="flex flex-wrap">
          <span v-for="tag in allTags" :key="tag" class="inline-block bg-gray-100 px-2 py-1 text-xs rounded-full mr-1 text-gray-600">{{ tag }}</span>
        </div>
      </aside>
    </div>
    <div class="mt-5">
      <button @click="prevPage" :disabled="currentPage === 1" class="bg-gray-100 text-gray-700 px-4 py-2 rounded disabled:opacity-50">Previous Page</button>
      <span class="mx-2">Page {{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-gray-100 text-gray-700 px-4 py-2 rounded disabled:opacity-50">Next Page</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'llm learning',
          date: '2023-10-26',
          tags: ['ai']
        },
        {
          id: 2,
          imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'llm learning',
          date: '2023-10-25',
          tags: ['ai']
        },
        {
          id: 3,
          imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'llm learning',
          date: '2023-10-24',
          tags: ['java']
        },
        {
          id: 4,
          imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'llm learning',
          date: '2023-10-23',
          tags: ['ai', 'java']
        },
        {
          id: 5,
          imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'llm learning',
          date: '2023-10-22',
          tags: ['python']
        },
        {
          id: 6,
          imageUrl: 'https://images.unsplash.com/photo-1733507267119-5b7ea4a989cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'llm learning',
          date: '2023-10-21',
          tags: ['vue']
        }
      ],
      allTags: ['ai', 'java', 'python', 'vue', 'javascript', 'css'],
      currentPage: 1,
      postsPerPage: 2
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage)
    },
    displayedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage
      const endIndex = startIndex + this.postsPerPage
      return this.posts.slice(startIndex, endIndex)
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    }
  }
}
</script>
