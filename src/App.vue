<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheIntro from './components/TheIntro.vue'
</script>

<template>
  <!-- <header> -->
  <!--   <div class="wrapper"> -->
  <!--     <HelloWorld msg="You did it!" /> -->
  <!---->
  <!--     <nav> -->
  <!--       <RouterLink to="/">Home</RouterLink> -->
  <!--       <RouterLink to="/about">About</RouterLink> -->
  <!--     </nav> -->
  <!--   </div> -->
  <!-- </header> -->

  <div class="mx-10">
    <TheHeader class="mb-10" />
    <TheIntro />

    <RouterView />
  </div>
</template>
