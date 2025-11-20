import { reactive } from 'vue'
import { $local } from './storage'
import { appFn, appData } from './appData'
import { useTemplateMode } from './useTemplateMode'

const _modeKey = 'tiny-vue-api-mode'
const _demoModeKey = 'tiny-vue-demo-mode'

const apiModeState = reactive({
  localeMode: appData.lang,
  apiMode: $local[_modeKey] || 'Composition', // 示例风格:  Options: 组合式; Composition: 选项式
  demoMode: $local[_demoModeKey] || 'default' // 示例展示： default:多示例， single:单示例
})

const { templateModeState } = useTemplateMode()

const apiModeFn = {
  getDemoName: (name) => {
    const isMobileFirst = templateModeState.mode === 'mobile-first'
    const isOptions = apiModeState.apiMode === 'Options'
    const resultName = isMobileFirst ? `mobile-first/${name}` : name
    // mobile-first模板暂时没有composition-api 格式的文件，需要特殊处理下
    return resultName.replace(/\.vue$/, `${isOptions || isMobileFirst ? '' : '-composition-api'}.vue`)
  },
  changeLocaleMode: (name) => {
    appFn.toggleLang(name)
  },
  changeApiMode: (name) => {
    $local[_modeKey] = name
  },
  changeDemoMode: (value) => {
    apiModeState.demoMode = value
    $local[_demoModeKey] = value
  }
}

export function useApiMode() {
  return {
    apiModeState,
    apiModeFn
  }
}
