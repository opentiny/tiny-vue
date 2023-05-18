import { getStyle } from './index'

export const api = ['state']

export const renderless = (props, { reactive, computed }, { vm }) => {
  const api = {}

  const state = reactive({
    style: computed(() => api.getStyle())
  })

  Object.assign(api, {
    state,
    getStyle: getStyle({ props })
  })

  vm.$on('handleChange', (value) => {
    vm.$emit('change', value)
  })

  return api
}
