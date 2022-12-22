<script setup lang="ts">
// import Preview_PSSS from '../components/PortfolioContent/Preview/"
// import Preview_RTSA
import Preview_TipLetsWristLets from '../components/PortfolioContent/Preview/TipLetsWristLets.md'
import Preview_LiveBraille from '../components/PortfolioContent/Preview/LiveBraille.md'
import Preview_GTPlanner from '../components/PortfolioContent/Preview/GTPlanner.md'
import Preview_ResearchHub from '../components/PortfolioContent/Preview/ResearchHub.md'
import Preview_PCBEMG from '../components/PortfolioContent/Preview/PCBEMG.md'
import Preview_LC2D from '../components/PortfolioContent/Preview/LC2D.md'
import Preview_TapProjects from '../components/PortfolioContent/Preview/TapProjects.md'
import Preview_TapKeyboard from '../components/PortfolioContent/Preview/TapKeyboard.md'
// import About from './about.md'
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <Header />

    <div py-4 />

    <div class="grid grid-cols-3 gap-6">
      <div>
        <!-- 1 -->
        <RouterLink to="/project/TipLetsWristLets">
          <Preview_TipLetsWristLets />
        </RouterLink>
      </div>
      <div>
        <!-- 2 -->
        <RouterLink to="/project/LiveBraille">
          <Preview_LiveBraille />
        </RouterLink>
      </div>
      <div>
        <!-- 3 -->
        <RouterLink to="/project/GTPlanner">
          <Preview_GTPlanner />
        </RouterLink>
      </div>
      <div>
        <!-- 4 -->
        <RouterLink to="/project/ResearchHub">
          <Preview_ResearchHub />
        </RouterLink>
      </div>
      <div>
        <!-- 5 -->
        <RouterLink to="/project/PCBEMG">
          <Preview_PCBEMG />
        </RouterLink>
      </div>
      <div>
        <!-- 6 -->
        <RouterLink to="/project/LC2D">
          <Preview_LC2D />
        </RouterLink>
      </div>
      <div>
        <!-- 7 -->
        <RouterLink to="/project/TapProjects">
          <Preview_TapProjects />
        </RouterLink>
      </div>
      <div>
        <!-- 8 -->
        <RouterLink to="/project/TapKeyboard">
          <Preview_TapKeyboard />
        </RouterLink>
      </div>
      <div>
        <!-- 9 -->
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

