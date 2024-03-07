import { queryChange } from './index'

export const api = ['state', 'queryChange']

export const renderless = (props, { onMounted, reactive, watch, inject }, { broadcast, vm }) => {
  const select = inject('select')
  const constants = select._constants

  const state = reactive({
    visible: true
  })

  const api = {
    state,
    queryChange: queryChange({ select, state, vm })
  }

  watch(
    () => props.disabled,
    (value) => {
      broadcast(constants.COMPONENT_NAME.Option, constants.EVENT_NAME.handleGroupDisabled, value)
    },
    { immediate: true }
  )

  onMounted(() => {
    if (props.disabled) {
      broadcast(constants.COMPONENT_NAME.Option, constants.EVENT_NAME.handleGroupDisabled, props.disabled)
    }

    select.state.selectEmitter.on(constants.EVENT_NAME.queryChange, api.queryChange)
  })

  return api
}
