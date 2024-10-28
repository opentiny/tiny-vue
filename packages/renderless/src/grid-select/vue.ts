export const api = ['state']

export const renderless = (props, { reactive }, { vm }) => {
  const api = {}

  const state = reactive({
    value: props.modelValue,
    gridData: props.gridOp
  })

  Object.assign(api, {
    state
  })

  return api
}
