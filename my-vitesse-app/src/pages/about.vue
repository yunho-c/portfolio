<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
import about from "./about_.md"
</script>

<template>
  <div>
    <Header />
    <about />
  </div>
</template>
