<template>
  <div
    id="infoCards"
    class="flex w-full flex-wrap items-stretch justify-center gap-x-5 gap-y-5 lg:flex-nowrap lg:justify-between"
  >
    <router-link
      to="/about"
      class="flex h-full max-w-sm transform flex-col rounded-lg border border-gray-200 bg-orange-400 p-6 shadow-md transition-transform hover:scale-105"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        About Me <span class="ml-2">✏️</span>
      </h5>
      <p class="mb-3 flex-grow font-normal text-gray-700">
        Hello! I’m Maria Estrada Miguel, a proud Mexican-American with deep roots in the vibrant
        culture and language of Spanish. Growing up, I spoke Spanish at home, which has given me a
        unique perspective on the beauty and richness of this language. The majority of my family
        lives in Mexico City, so I’m constantly traveling down there to visit them, which I feel
        extremely blessed about. <br /><br />
        <span class="font-bold">Click Here</span> to learn more.
      </p>
    </router-link>

    <router-link
      to="/pricing"
      class="flex h-full max-w-sm transform flex-col rounded-lg border border-gray-200 bg-blue-400 p-6 shadow-md transition-transform hover:scale-105"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Pricing <span class="ml-2">💵</span>
      </h5>
      <p class="mb-3 flex-grow font-normal text-gray-700">
        I offer different pricing options and discounts based on age and lesson duration.
        <br /><br />
        <span class="font-bold">Click Here</span> for more details.
      </p>
    </router-link>

    <router-link
      to="/faq"
      class="flex h-full max-w-sm transform flex-col rounded-lg border border-gray-200 bg-yellow-400 p-6 shadow-md transition-transform hover:scale-105"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        FAQ <span class="ml-2">📚</span>
      </h5>
      <p class="mb-3 flex-grow font-normal text-gray-700">
        Find answers to common questions about pricing, lesson structure, and more. <br /><br />
        <span class="font-bold">Click Here</span> to learn more.
      </p>
    </router-link>

    <router-link
      to="#"
      class="flex h-full w-full transform flex-col rounded-lg border border-gray-200 bg-red-400 p-6 shadow-md transition-transform hover:scale-105 lg:max-w-sm"
    >
      <h5 class="mb-2 flex items-center text-2xl font-bold tracking-tight text-gray-900">
        Contact Me <span class="ml-2">📲</span>
      </h5>
      <p class="mb-3 flex-grow font-normal text-gray-700">
        Have questions? Feel free to reach out!
      </p>
      <div class="w-full">
        <p class="font-bold text-gray-900">Email:</p>
        <a href="mailto:estradamiguelmaria@gmail.com" class="text-sm text-blue-700 hover:underline">
          estradamiguelmaria@gmail.com
        </a>
        <p class="mt-3 font-bold text-gray-900">Phone:</p>
        <a href="tel:+16122345053" class="text-sm text-blue-700 hover:underline">
          (612) 234-5053
        </a>
      </div>
    </router-link>
  </div>
</template>
