<template>
  <div class="mt-10 flex flex-col gap-10 lg:flex-row">
    <img
      src="@/assets/flag.webp"
      alt="mexican banner"
      class="fixed top-0 left-0 z-[-1] h-full w-full object-cover"
      loading="eager"
      fetchpriority="high"
    />

    <!-- 30-Minute Sessions Card -->
    <div class="w-full overflow-hidden rounded-xl bg-red-500 shadow-lg lg:w-2/4">
      <!-- <img src="@/assets/bird.png" alt="Spanish Lessons" class="w-full h-40 object-cover"> -->
      <!-- 30-Minute Sessions Card -->
      <div class="mx-auto overflow-hidden rounded-xl bg-red-500 p-6">
        <img
          src="@/assets/bird.png"
          alt="Spanish Lessons"
          class="mx-auto h-32 w-32 rounded-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <p class="text-center text-2xl font-bold">30-Minute Sessions</p>
      </div>

      <div class="p-6">
        <div class="mt-4 space-y-6">
          <!-- Children's Pricing -->
          <div class="rounded-lg bg-red-300 p-4 shadow-xl">
            <p class="text-lg font-semibold text-orange-600">Children's Rates (Ages 4-12)</p>
            <ul class="mt-2 space-y-1 text-gray-700">
              <li>📌 <span class="font-bold">$25</span> per session</li>
              <li>
                📦 <span class="font-bold">$23 per session</span> (5 Sessions: $115, Save $10)
              </li>
              <li>
                🎯 <span class="font-bold">$20 per session</span> (10 Sessions: $200, Save $50)
              </li>
            </ul>
          </div>

          <!-- Adult Pricing -->
          <div class="rounded-lg bg-red-300 p-4 shadow-xl">
            <p class="text-lg font-semibold text-blue-600">Adult Rates (Ages 13+)</p>
            <ul class="mt-2 space-y-1 text-gray-700">
              <li>📌 <span class="font-bold">$30</span> per session</li>
              <li>
                📦 <span class="font-bold">$28 per session</span> (5 Sessions: $140, Save $10)
              </li>
              <li>
                🎯 <span class="font-bold">$25 per session</span> (10 Sessions: $250, Save $50)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 1-Hour Sessions Card -->
    <div class="w-full overflow-hidden rounded-xl bg-teal-500 shadow-lg lg:w-2/4">
      <!-- <img src="@/assets/mask.png" alt="Spanish Lessons" class="w-full h-40 object-cover"> -->
      <div class="mx-auto overflow-hidden rounded-xl bg-teal-500 p-6">
        <img
          src="@/assets/mask.png"
          alt="Spanish Lessons"
          class="mx-auto h-32 w-32 rounded-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <p class="text-center text-2xl font-bold">1-Hour Sessions</p>
      </div>

      <div class="p-6">
        <div class="mt-4 space-y-6">
          <!-- Children's Pricing -->
          <div class="rounded-lg bg-teal-300 p-4 shadow-xl">
            <p class="text-lg font-semibold text-orange-600">Children's Rates (Ages 4-12)</p>
            <ul class="mt-2 space-y-1 text-gray-700">
              <li>📌 <span class="font-bold">$40</span> per session</li>
              <li>
                📦 <span class="font-bold">$38 per session</span> (5 Sessions: $190, Save $10)
              </li>
              <li>
                🎯 <span class="font-bold">$35 per session</span> (10 Sessions: $350, Save $50)
              </li>
            </ul>
          </div>

          <!-- Adult Pricing -->
          <div class="rounded-lg bg-teal-300 p-4 shadow-xl">
            <p class="text-lg font-semibold text-blue-600">Adult Rates (Ages 13+)</p>
            <ul class="mt-2 space-y-1 text-gray-700">
              <li>📌 <span class="font-bold">$45</span> per session</li>
              <li>
                📦 <span class="font-bold">$42 per session</span> (5 Sessions: $210, Save $15)
              </li>
              <li>
                🎯 <span class="font-bold">$40 per session</span> (10 Sessions: $400, Save $50)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
