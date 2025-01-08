import type {
  IDividerApi,
  IDividerProps,
  IDividerRenderlessParamUtils,
  IDividerState,
  ISharedRenderlessParamHooks
} from '@/types'
import { computedLineStyle, computedTextStyle, computedRootStyle, setDividerHeight } from './index'

export const api = ['state']

export const renderless = (
  props: IDividerProps,
  { reactive, onMounted, computed }: ISharedRenderlessParamHooks,
  { vm, nextTick }: IDividerRenderlessParamUtils
) => {
  const defaultMargin: string = '16px 0'
  const verticalMargin: string = '0 8px'

  const api = {} as IDividerApi
  const state: IDividerState = reactive({
    height: 'auto',
    margin: props.direction === 'vertical' ? verticalMargin : defaultMargin,
    lineStyle: computed(() => api.computedLineStyle()),
    textStyle: computed(() => api.computedTextStyle()),
    rootStyle: computed(() => api.computedRootStyle())
  })

  Object.assign(api, {
    state,
    computedLineStyle: computedLineStyle({ props }),
    computedTextStyle: computedTextStyle({ props }),
    computedRootStyle: computedRootStyle({ props, state }),
    setDividerHeight: setDividerHeight({ props, state, vm, nextTick })
  })

  onMounted(() => {
    api.setDividerHeight()
  })

  return api
}
