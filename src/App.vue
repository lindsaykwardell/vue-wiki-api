<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import useApi from './hooks/useApi'

const {
  query,
  results,
  status,
  Status,
  performSearch
} = useApi()
</script>

<template>
  <main class="m-auto pt-6">
    <h1 class="text-3xl text-center pb-3">Wikipedia Search API</h1>
    <input v-model="query" @keyup.enter="performSearch" class="p-2 border shadow-lg w-1/3 m-auto block" placeholder="Search for pages containing [x]..." />
    <div v-if="status === Status.ERROR">An error occurred</div>
    <div v-for="result in results" :key="result.id" class="flex border-t border-b p-4">
      <div class="flex-shrink w-32 mr-3">
        <img :src="result?.thumbnail?.url" />
      </div>
      <div class="flex-grow">
        <h2 class="text-2xl">{{ result.title }}</h2>
        <p>{{ result.description }}</p>
      </div>
    </div>
  </main>
</template>