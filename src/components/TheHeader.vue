<script setup>
import { RouterLink } from 'vue-router'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitter from './icons/IconTwitter.vue'
</script>

<template>
  <header class="border border-red-500 flex justify-between items-center p-5">
    <div>
      <p class="m-0 text-xl">Maria GEM</p>
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
