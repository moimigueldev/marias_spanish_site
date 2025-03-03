<template>
  <div
    class="flex min-h-screen flex-col items-center justify-start gap-6 p-4 lg:justify-center lg:gap-10 lg:p-6"
  >
    <img
      src="../assets/flag.webp"
      alt="Banner"
      class="fixed inset-0 z-[-1] h-full w-full object-cover"
      loading="eager"
      fetchpriority="high"
    />

    <!-- 30-Minute Sessions Card -->
    <div class="w-full max-w-lg overflow-hidden rounded-xl bg-orange-300 shadow-lg lg:max-w-2xl">
      <div class="overflow-hidden rounded-t-xl bg-orange-300 p-6 lg:p-8">
        <p class="mt-6 text-center text-3xl font-bold text-[#4a3f35] lg:mt-10 lg:text-4xl">
          30-Minute Online Sessions
        </p>
      </div>

      <div class="p-6 lg:p-8">
        <div class="mt-4 space-y-6 lg:mt-6 lg:space-y-8">
          <!-- Children's Pricing -->
          <div class="rounded-lg bg-orange-200 p-4 shadow-md lg:p-6">
            <p class="text-xl font-semibold text-[#8b5e3c] lg:text-2xl">
              Children's Rates (Ages 4-12)
            </p>
            <ul class="mt-2 space-y-1 text-lg text-[#5a4a3a] lg:mt-3 lg:space-y-2 lg:text-xl">
              <li><span class="font-bold">$25</span> per session</li>
              <li><span class="font-bold">$23 per session</span> (5 Sessions: $115, Save $10)</li>
              <li><span class="font-bold">$20 per session</span> (10 Sessions: $200, Save $50)</li>
            </ul>
          </div>

          <!-- Adult Pricing -->
          <div class="rounded-lg bg-orange-200 p-4 shadow-md lg:p-6">
            <p class="text-xl font-semibold text-[#5e7762] lg:text-2xl">Adult Rates (Ages 13+)</p>
            <ul class="mt-2 space-y-1 text-lg text-[#5a4a3a] lg:mt-3 lg:space-y-2 lg:text-xl">
              <li><span class="font-bold">$30</span> per session</li>
              <li><span class="font-bold">$28 per session</span> (5 Sessions: $140, Save $10)</li>
              <li><span class="font-bold">$25 per session</span> (10 Sessions: $250, Save $50)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 1-Hour Sessions Card -->
    <div class="w-full max-w-lg overflow-hidden rounded-xl bg-orange-300 shadow-lg lg:max-w-2xl">
      <div class="overflow-hidden rounded-t-xl bg-orange-300 p-6 lg:p-8">
        <p class="mt-6 text-center text-3xl font-bold text-[#4a3f35] lg:mt-10 lg:text-4xl">
          1-Hour Online Sessions
        </p>
      </div>

      <div class="p-6 lg:p-8">
        <div class="mt-4 space-y-6 lg:mt-6 lg:space-y-8">
          <!-- Children's Pricing -->
          <div class="rounded-lg bg-orange-200 p-4 shadow-md lg:p-6">
            <p class="text-xl font-semibold text-[#8b5e3c] lg:text-2xl">
              Children's Rates (Ages 4-12)
            </p>
            <ul class="mt-2 space-y-1 text-lg text-[#5a4a3a] lg:mt-3 lg:space-y-2 lg:text-xl">
              <li><span class="font-bold">$40</span> per session</li>
              <li><span class="font-bold">$38 per session</span> (5 Sessions: $190, Save $10)</li>
              <li><span class="font-bold">$35 per session</span> (10 Sessions: $350, Save $50)</li>
            </ul>
          </div>

          <!-- Adult Pricing -->
          <div class="rounded-lg bg-orange-200 p-4 shadow-md lg:p-6">
            <p class="text-xl font-semibold text-[#5e7762] lg:text-2xl">Adult Rates (Ages 13+)</p>
            <ul class="mt-2 space-y-1 text-lg text-[#5a4a3a] lg:mt-3 lg:space-y-2 lg:text-xl">
              <li><span class="font-bold">$45</span> per session</li>
              <li><span class="font-bold">$42 per session</span> (5 Sessions: $210, Save $15)</li>
              <li><span class="font-bold">$40 per session</span> (10 Sessions: $400, Save $50)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
