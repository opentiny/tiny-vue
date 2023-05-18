export const api = ['state']

export const renderless = (props, { reactive, provide }) => {
  const state = reactive({
    groupSize: props.groupSize,
    list: props.list
  })

  const api = {
    state
  }

  provide('groupSize', state.groupSize)

  return api
}
