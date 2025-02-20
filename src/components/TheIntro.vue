<script setup></script>

<template>
  <section id="theIntro" class="flex flex-col lg:flex-row gap-10 justify-around bg-orange-200">
    <!-- Left Section -->
    <div class="w-full lg:w-2/3">


      <img src="@/assets/intro.avif" alt="Intro Image"
        class="w-full h-[300px] sm:h-[600px] object-cover rounded shadow-md" loading="eager" fetchpriority="high" />

    </div>
    <!-- Right Section -->
    <div class="lg:w-1/3 w-full">
      <div class="space-y-10 md:space-y-20 h-3/4">
        <!-- <h1 class="text-4xl font-bold">Spanish Tutoring</h1> -->
        <p class="font-light">
          <span class="font-bold">¡Hola!</span> My name is Maria, and I'm so excited that you're
          interested in learning Spanish! I am a graduate of the University of Minnesota with a
          passion for teaching others the beautiful Spanish language.
          <br />
          <br />
          Lessons will be tailored to your needs, with a focus on speaking, reading, and writing in
          Spanish. One of my goals is to have students speak as much Spanish as possible to improve
          their pronunciation and confidence.
        </p>

        <a href="https://forms.gle/YmcTPReoSsV4QQrs9" target="_blank" rel="noopener noreferrer"
          class="border rounded border-orange-500 px-10 py-3 text-2xl text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white">
          Register Here
        </a>
      </div>
      <div class="flex items-center justify-between h-1/4 mt-10 md:mt-0">
        <div>
          <p class="font-bold text-lg mb-5">Location</p>
          <p class="font-extralight text-sm">Virtual / Online</p>
        </div>
        <div class="pr-10">
          <p class="font-bold text-lg mb-5">Contact</p>
          <a href="mailto:estradamiguelmaria@gmail.com"
            class="font-extralight text-sm hover:text-blue-500">estradamiguelmaria@gmail.com</a>

          <a href="tel:+16122345053" class="font-extralight text-sm block hover:text-blue-500">(612) 234-5053</a>
        </div>
      </div>
    </div>
  </section>
</template>
