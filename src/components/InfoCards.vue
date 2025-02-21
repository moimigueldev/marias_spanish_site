<template>
  <div
    id="infoCards"
    class="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-stretch gap-y-5 gap-x-5"
  >
    <router-link
      to="/about"
      class="max-w-sm h-full p-6 bg-orange-400 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        About Me <span class="ml-2">✏️</span>
      </h5>
      <p class="mb-3 font-normal text-gray-700 flex-grow">
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
      class="max-w-sm h-full p-6 bg-blue-400 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Pricing <span class="ml-2">💵</span>
      </h5>
      <p class="mb-3 font-normal text-gray-700 flex-grow">
        I offer different pricing options and discounts based on age and lesson duration.
        <br /><br />
        <span class="font-bold">Click Here</span> for more details.
      </p>
    </router-link>

    <router-link
      to="/faq"
      class="max-w-sm h-full p-6 bg-yellow-400 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        FAQ <span class="ml-2">📚</span>
      </h5>
      <p class="mb-3 font-normal text-gray-700 flex-grow">
        Find answers to common questions about pricing, lesson structure, and more. <br /><br />
        <span class="font-bold">Click Here</span> to learn more.
      </p>
    </router-link>

    <router-link
      to="#"
      class="w-full lg:max-w-sm h-full p-6 bg-red-400 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center">
        Contact Me <span class="ml-2">📲</span>
      </h5>
      <p class="mb-3 font-normal text-gray-700 flex-grow">
        Have questions? Feel free to reach out!
      </p>
      <div class="w-full">
        <p class="font-bold text-gray-900">Email:</p>
        <a href="mailto:estradamiguelmaria@gmail.com" class="text-sm text-blue-700 hover:underline">
          estradamiguelmaria@gmail.com
        </a>
        <p class="font-bold text-gray-900 mt-3">Phone:</p>
        <a href="tel:+16122345053" class="text-sm text-blue-700 hover:underline">
          (612) 234-5053
        </a>
      </div>
    </router-link>
  </div>
</template>
