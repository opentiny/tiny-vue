import { getChangePosition, watchVisible, watchSliderButtonChange } from './index'

export const api = ['state']

export const renderless = (props, { reactive, provide, onMounted, onBeforeUnmount, watch }, { parent, vm }) => {
  const state = reactive({
    tag: 'div',
    isActive: false,
    sliderWidth: 0,
    sliderHeight: 0,
    sliderSpace: props.size === 'large' ? 4 : 2,
    sliderInfo: [],
    currentIndex: 0,
    mutationObserver: null,
    intersectionObserver: null
  })

  parent.$on('handleChange', (value) => {
    api.getChangePosition(value)

    parent.$emit('change', value)
  })

  parent.$on('eachBlock', (left, width, height, value, buttonVm) => {
    const sliderItem = state.sliderInfo.find((item) => item.buttonVm === buttonVm)
    if (props.modelValue === value) {
      state.isActive = true
    }
    // 如果已经有了，就更新
    if (sliderItem) {
      state.sliderInfo[state.sliderInfo.indexOf(sliderItem)] = { ...sliderItem, left, width, value, height }
    } else {
      state.sliderInfo.push({ buttonVm, left, width, value, height })
    }
  })

  // 子组件卸载时，删除数据，防止内存泄露
  parent.$on('delBlock', (value) => {
    let sliderItem = state.sliderInfo.find((item) => item.value === value)

    if (sliderItem) {
      state.sliderInfo.splice(state.sliderInfo.indexOf(sliderItem), 1)
    }
  })

  const api = {}

  Object.assign(api, {
    state,
    getChangePosition: getChangePosition({ state }),
    watchVisible: watchVisible({ vm, api, props, state }),
    watchSliderButtonChange: watchSliderButtonChange({ vm, state, api, props })
  })

  provide('sliderType', props.type)

  provide('sliderSize', props.size)

  provide('disabled', props.disabled)

  onMounted(() => {
    api.getChangePosition(props.modelValue)
    api.watchVisible()
    api.watchSliderButtonChange()
  })

  onBeforeUnmount(() => {
    mutationObserver?.disconnect()
    intersectionObserver?.disconnect()
  })

  watch(
    () => props.modelValue,
    (value) => {
      api.getChangePosition(value)
    }
  )

  return api
}
