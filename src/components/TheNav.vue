<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleIsNavOpen() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="">
    <div class="flex max-w-screen-xl flex-wrap items-center justify-between py-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="text-xl font-semibold whitespace-nowrap md:text-3xl"
          >Spanish Online with Maria</span
        >
      </router-link>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleIsNavOpen"
        class="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-orange-300 focus:ring-2 focus:ring-orange-300 focus:outline-none md:hidden"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-5 w-5 text-orange-400"
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
          class="mt-4 flex flex-col rounded-lg bg-orange-400 p-4 font-medium shadow-xl md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-orange-200 md:p-0 md:shadow-none rtl:space-x-reverse"
        >
          <li>
            <router-link
              to="/"
              @click="toggleIsNavOpen"
              active-class="font-bold md:scale-110 text-white md:text-orange-400"
              class="block rounded-sm px-3 py-2 transition duration-300 hover:scale-110 md:bg-transparent md:p-0"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              @click="toggleIsNavOpen"
              active-class="font-bold md:scale-110 text-white md:text-orange-400"
              class="block rounded-sm px-3 py-2 transition duration-300 hover:scale-110 md:bg-transparent md:p-0"
              >About Me</router-link
            >
          </li>

          <li>
            <router-link
              to="/pricing"
              @click="toggleIsNavOpen"
              active-class="font-bold md:scale-110 text-white md:text-orange-400"
              class="block rounded-sm px-3 py-2 transition duration-300 hover:scale-110 md:bg-transparent md:p-0"
              >Pricing</router-link
            >
          </li>
          <li>
            <router-link
              to="/faq"
              @click="toggleIsNavOpen"
              active-class="font-bold md:scale-110 text-white md:text-orange-400"
              class="block rounded-sm px-3 py-2 transition duration-300 hover:scale-110 md:bg-transparent md:p-0"
              >FAQ</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
