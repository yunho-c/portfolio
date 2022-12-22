<script setup lang="ts">
import Detail_TipLetsWristLets from '../../components/PortfolioContent/Detail/TipLetsWristLets.md'
import Detail_LiveBraille from '../../components/PortfolioContent/Detail/LiveBraille.md'
import Detail_GTPlanner from '../../components/PortfolioContent/Detail/GTPlanner.md'
import Detail_ResearchHub from '../../components/PortfolioContent/Detail/ResearchHub.md'
import Detail_PCBEMG from '../../components/PortfolioContent/Detail/PCBEMG.md'
import Detail_LC2D from '../../components/PortfolioContent/Detail/LC2D.md'
import Detail_TapProjects from '../../components/PortfolioContent/Detail/TapProjects.md'
import Detail_TapKeyboard from '../../components/PortfolioContent/Detail/TapKeyboard.md'

const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div>
    <Detail_TipLetsWristLets v-if="props.name === 'TipLetsWristLets'" />
    <Detail_LiveBraille v-else-if="props.name === 'LiveBraille'" />
    <Detail_GTPlanner v-else-if="props.name === 'GTPlanner'" />
    <Detail_ResearchHub v-else-if="props.name === 'ResearchHub'" />
    <Detail_PCBEMG v-else-if="props.name === 'PCBEMG'" />
    <Detail_LC2D v-else-if="props.name === 'LC2D'" />
    <Detail_TapProjects v-else-if="props.name === 'TapProjects'" />
    <Detail_TapKeyboard v-else-if="props.name === 'TapKeyboard'" />
    
    <div>
      <button
        btn m="3 t6" text-sm
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
