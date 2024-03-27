import { getIntegerAndDecimal } from './index'
import type { IStatisticApi, IStatisticState } from '@/types'

export const api = ['state', 'getIntegerAndDecimal']

export const renderless = (props, hooks): IStatisticApi => {
  const api: IStatisticApi = {
    getIntegerAndDecimal: getIntegerAndDecimal({ props })
  }
  const { reactive, computed } = hooks

  const state: IStatisticState = reactive({
    value: computed(() => api.getIntegerAndDecimal(props))
  })

  Object.assign(api, {
    state
  })

  return api
}
