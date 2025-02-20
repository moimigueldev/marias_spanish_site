<script setup></script>

<template>
  <div class="flex flex-col lg:flex-row h-200 gap-5">
    <div
      class="left w-full lg:w-1/2 lg:p-20 bg-orange-300 text-center rounded-lg shadow-lg relative"
    >
      <img
        src="@/assets/mexican_banner.png"
        alt="mexican banner"
        class="absolute left-0 top-0 right-0 w-full h-[400px] hidden lg:block"
        loading="eager"
        fetchpriority="high"
        width="1200"
        height="400"
      />
      <img
        src="@/assets/profile_image.jpeg"
        class="w-60 h-60 lg:w-150 lg:h-150 rounded-full object-cover shadow-lg sm:block lg:hidden mx-auto my-10"
        alt="Profile Image"
        loading="eager"
        fetchpriority="high"
        width="240"
        height="240"
      />
      <p class="text-2xl lg:text-5xl font-bold lg:mt-30">Maria Estrada Miguel</p>
      <p class="font-extralight lg:mt-5 text-lg lg:text-xl font-semibold">About Me</p>

      <p class="font-light p-5 text-sm lg:text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum labore soluta
        aperiam vero inventore laborum, culpa quisquam ratione placeat, ipsa nam earum ea
        repellendus aspernatur cupiditate, pariatur dolor maiores? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatibus nemo illo illum pariatur fugit! Ea suscipit
        accusamus praesentium facere doloremque. Recusandae quam delectus cumque ipsa, expedita
        nesciunt earum libero quaerat?
      </p>
    </div>
    <div class="rigt w-full lg:w-1/2 rounded-lg flex justify-center items-center">
      <img
        src="@/assets/profile_image.jpeg"
        class="w-60 h-60 lg:w-150 lg:h-150 rounded-full object-cover shadow-lg hidden lg:block"
        alt="Profile Image"
        loading="eager"
        fetchpriority="high"
        width="240"
        height="240"
      />
    </div>
  </div>
</template>
