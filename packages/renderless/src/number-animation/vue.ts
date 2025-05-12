import { play, formattedValue, onFinish } from './index'

export const api = ['state', 'play', 'formattedValue', 'onFinish']
export const renderless = (props, { onMounted, computed, reactive }, { emit }) => {
  const api = {}

  const state = reactive({
    animating: true,
    value: props.from,
    showValue: computed(() => api.formattedValue(state, props))
  })

  onMounted(() => {
    if (props.active) {
      api.play(props, state)
    }
  })
  Object.assign(api, {
    state,
    play: play({ props, state, api }),
    formattedValue: formattedValue({ state, props }),
    onFinish: onFinish({ emit, props, state })
  })

  return api
}
