export const api = ['state']

export const renderless = (props, { reactive, computed }, { vm }) => {
  const api = {}

  const state = reactive({
    size: computed(() => props.size)
  })

  Object.assign(api, {
    state
  })

  vm.$on('handleChange', (value) => {
    vm.$emit('change', value)
  })

  return api
}
