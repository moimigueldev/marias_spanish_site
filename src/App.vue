<script setup>
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue'
</script>

<template>


  <div class="space-y-5 mx-5 md:px-10 lg:px-20 pb-30">
    <TheNav />
    <RouterView />
  </div>
</template>
