<script>
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'
// import { OrbitControls } from 'troisjs'
export default {
  components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
}
</script>

<template>
  <Renderer>
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box>
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>
