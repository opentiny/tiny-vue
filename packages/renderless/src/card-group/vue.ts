export const api = ['state']

export const renderless = (props, { reactive }, { vm }) => {
  const api = {}

  const state = reactive({})

  Object.assign(api, {
    state
  })

  vm.$on('handleChange', (value) => {
    vm.$emit('change', value)
  })

  return api
}
