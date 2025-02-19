<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="theIntro" class="flex flex-col lg:flex-row gap-10 justify-around">
    <!-- Left Section -->
    <div class="w-full lg:w-2/3">
      <!-- <img -->
      <!--   src="https://images.unsplash.com/photo-1498603536246-15572faa67a6?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" -->
      <!--   alt="Intro Image" class="w-full h-[800px] object-cover" /> -->

      <img
        src="https://images.unsplash.com/photo-1636573533532-fdf7c44af2d5?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Intro Image"
        class="w-full h-[300px] sm:h-[600px] object-cover rounded shadow-md"
      />
    </div>

    <!-- <img -->
    <!--   src="https://images.unsplash.com/photo-1562215589-b6d0ed3cfec8?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" -->
    <!--   alt="Intro Image" class="w-full h-[600px] object-cover" /> -->

    <!-- <img -->
    <!--   src="https://images.unsplash.com/photo-1532618261731-e3346f1705bc?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" -->
    <!--   alt="Intro Image" class="w-full h-[600px] object-cover" /> -->
    <!-- </div> -->

    <!-- Right Section -->
    <div class="lg:w-1/3 w-full">
      <div class="space-y-10 md:space-y-20 h-3/4">
        <h1 class="text-4xl font-bold">Spanish Tutoring</h1>
        <p class="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique doloribus odit
          blanditiis asperiores obcaecati nisi consequuntur voluptatum eum adipisci accusantium
          harum, rerum possimus ducimus accusamus alias minus! Voluptatum, incidunt.
        </p>

        <router-link
          to="#"
          class="border rounded border-orange-500 px-10 py-3 text-2xl text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
        >
          Sign Up
        </router-link>
      </div>
      <div class="flex items-center justify-between h-1/4 mt-10 md:mt-0">
        <div>
          <p class="font-bold text-lg mb-5">Location</p>
          <p class="font-extralight text-sm">Virtual / Online</p>
        </div>
        <div class="pr-10">
          <p class="font-bold text-lg mb-5">Contact</p>
          <p class="font-extralight text-sm">sexymexy@hooters.com</p>
          <p class="font-extralight text-sm">(555) 555-5555</p>
        </div>
      </div>
    </div>
  </section>
</template>
