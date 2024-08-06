export const getChangePosition =
  ({ state }) =>
  (value) => {
    const sliderItem = state.sliderInfo.find((item) => item.value === value)

    if (sliderItem) {
      const { buttonVm, width, left, height } = sliderItem
      // 判断如果宽或者高是0，则可能是slider从dispaly：none转换成显示态，重新计算一下宽高
      if (!width || !height) {
        sliderItem.left = buttonVm.offsetLeft
        sliderItem.width = buttonVm.offsetWidth
        sliderItem.height = buttonVm.offsetHeight
      }
      state.sliderSpace = sliderItem.left
      state.sliderWidth = sliderItem.width
      state.sliderHeight = sliderItem.height
    }
  }

export const watchSliderButtonChange =
  ({ vm, state, api, props }) =>
  (value) => {
    const observer = new MutationObserver(() => {
      state.sliderInfo.forEach((sliderItem) => {
        const { buttonVm } = sliderItem
        sliderItem.left = buttonVm.offsetLeft
        sliderItem.width = buttonVm.offsetWidth
        sliderItem.height = buttonVm.offsetHeight
      })
      api.getChangePosition(props.modelValue)
    })
    state.mutationObserver = observer
    const buttonBox = vm.$refs?.sliderButtonBox
    if (buttonBox) {
      observer.observe(vm.$refs.sliderButtonBox, { childList: true, subtree: true, characterData: true })
    }
  }

export const watchVisible =
  ({ vm, api, props, state }) =>
  () => {
    const group = vm.$refs?.sliderButtonGroup
    if (!group) {
      return
    }
    /** 监听slider-button-group是否出现在视口，以解决下列场景
     *  1、初始化渲染时，display为node，此时offsetWidth和offsetHeight都为0，显示后，需要重新计算宽高
     *  2、当在隐藏状态时，子组件slider-button也可能会有更新，更新后再显示也需要重新计算宽高
     */
    const observer = new IntersectionObserver(() => {
      if (!group?.offsetParent) {
        return
      }
      api.getChangePosition(props.modelValue)
    })
    state.intersectionObserver = observer
    observer.observe(group)
  }
