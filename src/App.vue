<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheIntro from './components/TheIntro.vue'
import InfoCards from './components/InfoCards.vue'
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

  <div class="space-y-10 px-20 pb-30">
    <TheHeader />
    <TheIntro />
    <InfoCards />

    <RouterView />
  </div>
</template>
