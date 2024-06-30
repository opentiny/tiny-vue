import { queryChange, observeCallback } from './index'

export const api = ['state', 'queryChange']

export const renderless = (props, { onMounted, onBeforeUnmount, reactive, watch, inject }, { broadcast, vm }) => {
  const select = inject('select')
  const constants = select._constants

  const state = reactive({
    visible: true,
    timer: null
  })

  const api = {}

  Object.assign(api, {
    state,
    queryChange: queryChange({ select, state, vm }),
    observeCallback: observeCallback({ state, api })
  })

  watch(
    () => props.disabled,
    (value) => {
      broadcast(constants.COMPONENT_NAME.Option, constants.EVENT_NAME.handleGroupDisabled, value)
    },
    { immediate: true }
  )

  onMounted(() => {
    if (select.filterable) {
      const config = { attributes: false, childList: true, subtree: false }
      api.observer = new MutationObserver(api.observeCallback)

      // tiny新增，解决多端模式下报错问题
      if (vm.$refs.selectGroup) {
        api.observer.observe(vm.$refs.selectGroup, config)
      }
    }

    if (props.disabled) {
      broadcast(constants.COMPONENT_NAME.Option, constants.EVENT_NAME.handleGroupDisabled, props.disabled)
    }

    select.state.selectEmitter.on(constants.EVENT_NAME.queryChange, api.queryChange)
  })

  onBeforeUnmount(() => {
    api.observer && api.observer.disconnect()
  })

  return api
}
