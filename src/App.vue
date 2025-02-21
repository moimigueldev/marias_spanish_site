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
  <div class="space-y-5 mx-5 md:px-10 lg:px-20 pb-30">
    <TheNav />
    <TheLoader v-show="pageIsLoading" />
    <RouterView v-show="!pageIsLoading" />
  </div>
</template>
