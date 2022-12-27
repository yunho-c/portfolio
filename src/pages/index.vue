<script setup lang="ts">
// import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'
// export default {
//   components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
// }

const user = useUserStore()
const name = $ref(user.savedName)
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div>
    <Header />
    <div py-4 />

    <!-- temporary hero banner -->
    <div class="relative">
      <img class="w-full aspect-[21/9] object-cover rounded-md shadow-lg" src="/assets/Hero.jpg">
      <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 bg-opacity-40">
        <h3 class="text-xl text-white font-semibold op90">
          Mechanical Engineering '24 @ <span class="text-yellow">Georgia Tech</span>
        </h3>
        <p class="mt-2 text-sm text-gray-300">
          [Some description text. Some dummy text here.]
        </p>
      </div>
    </div>

    <!-- <Renderer>
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <Box>
          <LambertMaterial />
        </Box>
      </Scene>
    </Renderer> -->

    <div py-4 />

    <div class="grid grid-cols-3 gap-6">
      <div>
        <h2 class="text-2xl font-semibold op80">
          About
        </h2>
      </div>
      <div>
        <h2 class="text-2xl font-semibold op80">
          Coursework
        </h2>
      </div>
      <div>
        <h2 class="text-2xl font-semibold op80">
          Projects
        </h2>
      </div>

      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        </a>
      </div>
    </div>

    <div py-4 />

    [about]

    <div py-4 />

    <div>
      [socials: linkedin, github, email, hackaday]
    </div>

    <div py-4 />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
