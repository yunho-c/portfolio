<script setup lang="ts">
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'
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

    <h1 class="text-xl">
      Mechanical Engineering @ Georgia Tech
    </h1>

    <Renderer>
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <Box>
          <LambertMaterial />
        </Box>
      </Scene>
    </Renderer>

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
