export const api = ['state']

export const renderless = (props, { reactive, computed, inject }, { parent }) => {
  parent.tinyForm = parent.tinyForm || inject('form', null)
  const state = reactive({
    isDisplayOnly: computed(() => (parent.tinyForm || {}).displayOnly),
    isDisabled: computed(() => props.disabled || (parent.tinyForm || {}).disabled)
  })

  const api = {
    state
  }

  return api
}
