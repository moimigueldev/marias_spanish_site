<template>
  <div
    id="infoCards"
    class="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-y-5 gap-x-5"
  >
    <router-link
      to="/about"
      class="max-w-sm p-6 bg-orange-400 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">About Me</h5>
      <p class="mb-3 font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
        chronological order.
      </p>
    </router-link>

    <router-link
      to="/pricing"
      class="max-w-sm p-6 bg-blue-400 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Pricing</h5>
      <p class="mb-3 font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
        chronological order.
      </p>
    </router-link>

    <router-link
      to="/faq"
      class="max-w-sm p-6 bg-yellow-400 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">FAQ</h5>
      <p class="mb-3 font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
        chronological order.
      </p>
    </router-link>

    <router-link
      to="/faq"
      class="max-w-sm p-6 bg-red-400 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Contact</h5>
      <p class="mb-3 font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
        chronological order.
      </p>
    </router-link>
  </div>
</template>
