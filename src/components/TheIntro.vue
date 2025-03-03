<script setup></script>

<template>
  <section id="theIntro" class="flex flex-col justify-around gap-10 bg-orange-200 lg:flex-row">
    <!-- Left Section -->
    <div class="w-full lg:w-2/3">
      <img
        src="@/assets/intro.webp"
        alt="Intro Image"
        class="h-[300px] w-full rounded object-cover shadow-md sm:h-[600px]"
        loading="eager"
        fetchpriority="high"
      />
    </div>
    <!-- Right Section -->
    <div class="w-full lg:w-1/3">
      <div class="mt-0 h-3/4 space-y-10 md:space-y-10 lg:mt-15">
        <!-- <h1 class="text-4xl font-bold">Spanish Tutoring</h1> -->
        <p class="font-light">
          <span class="font-bold">¡Hola!</span> I’m Maria, and it’s so exciting that you're
          interested in learning Spanish! As one of the most widely spoken languages in the world,
          Spanish provides a powerful way to connect with diverse cultures and communities. I would
          love to help you develop strong language skills that will benefit you for a lifetime.
          <br />
          <br />
          Each lesson is customized to fit your needs, focusing on speaking, reading, and writing.
          My goal is to encourage students to speak as much Spanish as possible, helping them build
          confidence and improve their pronunciation.
          <br />
          <br />
          No matter where you’re starting from, I’ll help you succeed in this beautiful language!
          For more information about my lessons, fill out the interest form by clicking the
          <span
            class="inline-block transform transition-transform duration-300 hover:scale-110 hover:px-1 hover:text-orange-500"
          >
            <a
              class="font-bold"
              href="https://forms.gle/YmcTPReoSsV4QQrs9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Here
            </a>
          </span>

          button below—let’s learn and grow together!
        </p>

        <p class="text-center">
          <a
            href="https://forms.gle/YmcTPReoSsV4QQrs9"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded border border-orange-500 px-10 py-3 text-2xl text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
          >
            Register Here
          </a>
        </p>
      </div>
      <!-- <div class="flex items-center justify-between h-1/4 mt-10 md:mt-0"> -->
      <!--   <div> -->
      <!--     <p class="font-bold text-lg mb-5">Location</p> -->
      <!--     <p class="font-extralight text-sm">Virtual / Online</p> -->
      <!--   </div> -->
      <!--   <div class="pr-10"> -->
      <!--     <p class="font-bold text-lg mb-5">Contact</p> -->
      <!--     <a href="mailto:estradamiguelmaria@gmail.com" -->
      <!--       class="font-extralight text-sm hover:text-blue-500">estradamiguelmaria@gmail.com</a> -->
      <!---->
      <!--     <a href="tel:+16122345053" class="font-extralight text-sm block hover:text-blue-500">(612) 234-5053</a> -->
      <!--   </div> -->
      <!-- </div> -->
    </div>
  </section>
</template>
