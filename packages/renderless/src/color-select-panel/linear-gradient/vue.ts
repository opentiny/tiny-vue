import type { ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@/types'
import { useContext } from '../utils/context'
import { initState, useLinearGradient } from '.'

export const api = ['context', 'onClickBar', 'onThumbMouseDown', 'state']

export const renderless = (_: never, hooks: ISharedRenderlessParamHooks, utils: ISharedRenderlessParamUtils) => {
  const { reactive } = hooks
  const context = useContext(hooks)
  const state = initState(hooks)
  const { onClickBar, onThumbMouseDown } = useLinearGradient(state, hooks, utils, context)
  const api = reactive({
    state,
    context,
    onClickBar,
    onThumbMouseDown
  })

  return api
}
