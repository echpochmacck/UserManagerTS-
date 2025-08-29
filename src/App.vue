<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 space-y-12">
    <header class="text-center">
      <h1 class="text-3xl font-bold text-gray-800">User Manager</h1>
    </header>

    <RouterView/>
  </div>
</template>

