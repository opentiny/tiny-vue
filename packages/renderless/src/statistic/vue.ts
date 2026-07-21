import { getIntegerAndDecimal, animateValue } from './index'
import type { IStatisticApi, IStatisticState } from '@/types'

export const api = ['state', 'getIntegerAndDecimal', 'animateValue']

export const renderless = (props, hooks): IStatisticApi => {
  const { reactive, computed, watch } = hooks
  const state: IStatisticState = reactive({
    value: computed(() => api.getIntegerAndDecimal(props)),
    animatingValue: props.value,
    displayValue: computed(() => {
      if (props.useAnimation) {
        const tempProps = { ...props, value: state.animatingValue }
        return getIntegerAndDecimal({ props: tempProps })()
      }
      return state.value
    })
  })
  const api: IStatisticApi = {
    state,
    getIntegerAndDecimal: getIntegerAndDecimal({ props }),
    animateValue: animateValue({ props, state })
  }
  watch(
    () => props.value,
    (newVal) => {
      if (props.useAnimation) {
        state.animatingValue = props.startValue
        api.animateValue()
      }
    },
    { immediate: true }
  )

  return api
}