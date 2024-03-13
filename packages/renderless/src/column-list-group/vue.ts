export const api = ['state']

export const renderless = (props, { reactive }) => {
  const api = {}

  const state = reactive({})

  Object.assign(api, {
    state
  })

  return api
}
