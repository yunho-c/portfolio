<template>
  <header class="px-4 py-2">
    <div class="container flex items-center justify-between mx-auto">
      <!-- <a class="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" href="/"> -->
      <!-- <a class="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-slate-600 to-pink-600" href="/"> -->
      <!-- <RouterLink class="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-br from-indigo-700 to-slate-600" to="/"> -->
      <RouterLink class="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-br from-indigo-700 to-slate-600 dark:from-slate-400 dark:to-indigo-800" to="/">
        Yunho Cho
      </RouterLink>
      <RouterLink class="op90 hover:font-semibold transition-all duration-300 ease-in-out" to="/about">
        About
      </RouterLink>
      <RouterLink class="op90 hover:font-semibold transition-all duration-300 ease-in-out" to="/coursework">
        Coursework
      </RouterLink>
      <RouterLink class="op90 hover:font-semibold transition-all duration-300 ease-in-out" to="/projects">
        Projects
      </RouterLink>
    </div>
  </header>
</template>
