<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between py-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="text-xl md:text-3xl font-semibold whitespace-nowrap"
          >Spanish Online with Maria</span
        >
      </router-link>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        class="inline-flex items-center cursor-pointer p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5 text-orange-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Mobile Menu -->
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-orange-300 md:bg-orange-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li>
            <router-link
              to="/"
              active-class="font-bold scale-110 text-orange-500"
              class="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition duration-300 hover:scale-110"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              active-class="font-bold scale-110 text-orange-500"
              class="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition duration-300 hover:scale-110"
              >About Me</router-link
            >
          </li>

          <li>
            <router-link
              to="/pricing"
              active-class="font-bold scale-110 text-orange-500"
              class="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition duration-300 hover:scale-110"
              >Pricing</router-link
            >
          </li>
          <li>
            <router-link
              to="/faq"
              active-class="font-bold scale-110 text-orange-500"
              class="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition duration-300 hover:scale-110"
              >FAQ</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
