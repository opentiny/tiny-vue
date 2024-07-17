import { reactive, computed, watch } from 'vue'
import { router } from '@/router.js'
import { getAllComponents } from '@/menus.jsx'
import demoConfig from '@demos/config.js'
import { staticDemoPath } from '../views/components/cmp-config'

const allMenus = getAllComponents()

const templateModeState = reactive({
  isSaas: import.meta.env.VITE_TINY_THEME === 'saas',
  modeList: [],
  mode: null
})

watch(
  () => router.currentRoute.value.params.cmpId,
  (cmpId) => {
    if (!cmpId || !templateModeState.isSaas) {
      templateModeState.mode = demoConfig.isMobile ? 'mobile' : 'pc'
      templateModeState.modeList = []
    } else {
      const list = allMenus.find((i) => i.key === router.currentRoute.value.params.cmpId).mode
      templateModeState.modeList = list
      templateModeState.mode = list[0]
    }
  }
)

const staticPath = computed(() => {
  if (templateModeState.mode === 'mobile-first') {
    return '@demos/mobile-first/app'
  }
  return staticDemoPath
})

const optionsList = computed(() =>
  templateModeState.modeList.map((item) => {
    if (item === 'mobile-first') {
      return { value: item, text: '多端' }
    }
    return { value: item, text: item }
  })
)

export const useTemplateMode = () => {
  return { templateModeState, staticPath, optionsList }
}

export default useTemplateMode
