import { reactive } from 'vue'
import { $local } from './storage'

const _modeKey = 'tiny-vue-api-mode'
const _demoModeKey = 'tiny-vue-demo-mode'
const apiModeState = reactive({
  apiMode: $local[_modeKey] || 'Composition', // 示例风格:  Options: 组合式; Composition: 选项式
  demoMode: $local[_demoModeKey] || 'default' // 示例展示： default:多示例， single:单示例
})

const apiModeFn = {
  getDemoName: (name) => {
    return name.replace(/\.vue$/, `${apiModeState.apiMode === 'Options' ? '' : '-composition-api'}.vue`)
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
