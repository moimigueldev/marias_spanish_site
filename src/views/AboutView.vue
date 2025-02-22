<script setup></script>

<template>
  <div class="flex h-200 flex-col gap-5 lg:flex-row">
    <div
      class="left relative w-full rounded-lg bg-orange-300 text-center shadow-lg lg:w-1/2 lg:p-20"
    >
      <img
        src="@/assets/mexican_banner_1.webp"
        alt="mexican banner"
        class="absolute top-0 right-0 left-0 hidden h-[400px] w-full lg:block"
        loading="eager"
        fetchpriority="high"
        width="1200"
        height="400"
      />
      <img
        src="@/assets/profile_image.webp"
        class="mx-auto my-10 h-60 w-60 rounded-full object-cover shadow-lg sm:block lg:hidden lg:h-150 lg:w-150"
        alt="Profile Image"
        loading="eager"
        fetchpriority="high"
        width="240"
        height="240"
      />
      <p class="text-2xl font-bold lg:mt-30 lg:text-5xl">Maria Estrada Miguel</p>
      <p class="text-lg font-extralight font-semibold lg:mt-5 lg:text-xl">About Me</p>

      <p class="p-5 text-sm font-light lg:text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum labore soluta
        aperiam vero inventore laborum, culpa quisquam ratione placeat, ipsa nam earum ea
        repellendus aspernatur cupiditate, pariatur dolor maiores? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatibus nemo illo illum pariatur fugit! Ea suscipit
        accusamus praesentium facere doloremque. Recusandae quam delectus cumque ipsa, expedita
        nesciunt earum libero quaerat?
      </p>
    </div>
    <div class="rigt flex w-full items-center justify-center rounded-lg lg:w-1/2">
      <img
        src="@/assets/profile_image.webp"
        class="hidden h-60 w-60 rounded-full object-cover shadow-lg lg:block lg:h-150 lg:w-150"
        alt="Profile Image"
        loading="eager"
        fetchpriority="high"
        width="240"
        height="240"
      />
    </div>
  </div>
</template>
