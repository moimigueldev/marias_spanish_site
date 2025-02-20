<script setup>
import { RouterLink } from 'vue-router'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitter from './icons/IconTwitter.vue'
</script>

<template>
  <header class="flex justify-between items-center py-5">
    <div>
      <router-link to="/" class="m-0 text-3xl font-medium">Maria's Spanish Lessons</router-link>
    </div>

    <div class="flex items-center justify-between">
      <RouterLink to="#">
        <IconInstagram class="h-[30px]" />
      </RouterLink>

      <RouterLink to="# ">
        <IconTwitter class="h-[30px]" />
      </RouterLink>
    </div>
  </header>
</template>
