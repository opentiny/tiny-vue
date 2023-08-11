import { reactive } from 'vue'
import { $local } from './storage'

const _modeKey = 'tiny-vue-api-mode'
const apiModeState = reactive({
  apiMode: $local[_modeKey] || 'Options'
})

const apiModeFn = {
  getDemoName: (name) => {
    return name.replace(/\.vue$/, `${apiModeState.apiMode === 'Options' ? '' : '-composition-api'}.vue`)
  },
  changeApiMode: (name) => {
    $local[_modeKey] = name
  }
}

export function useApiMode() {
  return {
    apiModeState,
    apiModeFn
  }
}
