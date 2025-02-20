<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
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

  <!-- <img src="./assets/banner.png" alt="mexican banner" class="absolute w-full z-[-1]"> -->

  <div class="space-y-5 md:px-10 lg:px-20 pb-30">
    <TheHeader />
    <RouterView />
  </div>
</template>
