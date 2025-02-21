<template>
  <div class="flex flex-col lg:flex-row gap-10 mt-10">
    <img
      src="@/assets/flag.webp"
      alt="mexican banner"
      class="fixed w-full h-full object-cover top-0 left-0 z-[-1]"
      loading="eager"
      fetchpriority="high"
    />

    <!-- 30-Minute Sessions Card -->
    <div class="w-full lg:w-2/4 bg-red-500 rounded-xl shadow-lg overflow-hidden">
      <!-- <img src="@/assets/bird.png" alt="Spanish Lessons" class="w-full h-40 object-cover"> -->
      <!-- 30-Minute Sessions Card -->
      <div class="bg-red-500 rounded-xl mx-auto overflow-hidden p-6">
        <img
          src="@/assets/bird.png"
          alt="Spanish Lessons"
          class="w-32 h-32 rounded-full mx-auto object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <p class="text-2xl font-bold text-center">30-Minute Sessions</p>
      </div>

      <div class="p-6">
        <div class="mt-4 space-y-6">
          <!-- Children's Pricing -->
          <div class="p-4 bg-red-300 rounded-lg shadow-xl">
            <p class="text-lg font-semibold text-orange-600">Children's Rates (Ages 4-12)</p>
            <ul class="mt-2 text-gray-700 space-y-1">
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
          <div class="p-4 bg-red-300 rounded-lg shadow-xl">
            <p class="text-lg font-semibold text-blue-600">Adult Rates (Ages 13+)</p>
            <ul class="mt-2 text-gray-700 space-y-1">
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
    <div class="w-full lg:w-2/4 bg-teal-500 rounded-xl shadow-lg overflow-hidden">
      <!-- <img src="@/assets/mask.png" alt="Spanish Lessons" class="w-full h-40 object-cover"> -->
      <div class="bg-teal-500 rounded-xl mx-auto overflow-hidden p-6">
        <img
          src="@/assets/mask.png"
          alt="Spanish Lessons"
          class="w-32 h-32 rounded-full mx-auto object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <p class="text-2xl font-bold text-center">1-Hour Sessions</p>
      </div>

      <div class="p-6">
        <div class="mt-4 space-y-6">
          <!-- Children's Pricing -->
          <div class="p-4 bg-teal-300 rounded-lg shadow-xl">
            <p class="text-lg font-semibold text-orange-600">Children's Rates (Ages 4-12)</p>
            <ul class="mt-2 text-gray-700 space-y-1">
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
          <div class="p-4 bg-teal-300 rounded-lg shadow-xl">
            <p class="text-lg font-semibold text-blue-600">Adult Rates (Ages 13+)</p>
            <ul class="mt-2 text-gray-700 space-y-1">
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
