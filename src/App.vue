<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Yunho Cho',
  meta: [
    { name: 'description', content: 'Engineering Portfolio' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#0600A9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <!-- <RouterView /> -->
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
  <div>
    <div py-6 />
    <Header />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <!-- <component :is="Component" /> -->
        <component :is="Component" :key="$route.path" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
