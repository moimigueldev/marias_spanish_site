<script setup>
import { RouterView, useRoute } from 'vue-router'
import TheNav from './components/TheNav.vue'
import TheLoader from '@/components/TheLoader.vue'
import { ref, watch, onMounted } from 'vue'

const pageIsLoading = ref(true)
const route = useRoute()

onMounted(() => {
  setTimeout(() => {
    pageIsLoading.value = false
  }, 1300)
})

watch(route, () => {
  pageIsLoading.value = true
  resetPageIsLoading()
})

function resetPageIsLoading() {
  setTimeout(() => {
    pageIsLoading.value = false
  }, 1300)
}
</script>

<template>
  <div class="mx-5 space-y-5 pb-30 md:px-10 lg:px-20">
    <TheNav />
    <TheLoader v-show="pageIsLoading" />
    <RouterView v-show="!pageIsLoading" />
  </div>
</template>
