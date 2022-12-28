<script setup lang="ts">
import about from './about_.md'
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div>
    <Header />
    <about />
  </div>
</template>
