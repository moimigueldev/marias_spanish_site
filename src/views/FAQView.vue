<script setup></script>

<template>
  <div class="flex justify-center">
    <img
      src="@/assets/mexican_banner_1.webp"
      alt="mexican banner"
      class="fixed bottom-0 z-[-1] w-full rotate-180"
      loading="eager"
      fetchpriority="high"
    />
    <div class="min-h-[400px] w-full rounded bg-orange-300 p-10 text-center shadow-lg lg:w-1/2">
      <p class="mb-6 text-5xl font-bold">FAQ</p>

      <div class="space-y-4 text-left">
        <div>
          <p class="text-xl font-semibold">1. How long are the Spanish lessons?</p>
          <p class="text-gray-800">Each lesson lasts approximately 60 minutes.</p>
        </div>

        <div>
          <p class="text-xl font-semibold">2. Do I need prior knowledge of Spanish?</p>
          <p class="text-gray-800">
            No, we offer classes for all levels, from beginners to advanced learners.
          </p>
        </div>

        <div>
          <p class="text-xl font-semibold">3. Are the classes live or recorded?</p>
          <p class="text-gray-800">
            Our classes are live with a professional instructor, but recordings are available.
          </p>
        </div>

        <div>
          <p class="text-xl font-semibold">4. How can I book a lesson?</p>
          <p class="text-gray-800">You can easily book a lesson through our online platform.</p>
        </div>

        <div>
          <p class="text-xl font-semibold">5. What is the price of the lessons?</p>
          <p class="text-gray-800">
            The price depends on the package you choose. Visit our pricing page for details.
          </p>
        </div>

        <div>
          <p class="text-xl font-semibold">6. Will I receive study materials?</p>
          <p class="text-gray-800">
            Yes, we provide digital resources and exercises to support your learning.
          </p>
        </div>

        <div>
          <p class="text-xl font-semibold">7. Can I reschedule or cancel a lesson?</p>
          <p class="text-gray-800">
            Yes, you can reschedule or cancel with at least 24 hours' notice.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
