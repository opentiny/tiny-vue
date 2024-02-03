import type {
  IPopconfirmApi,
  IPopconfirmProps,
  IPopconfirmRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@/types'
import { show, hide, confirm, handleEmit } from './index'

export const api = ['state', 'show', 'hide', 'confirm', 'handleEmit']

export const renderless = (
  props: IPopconfirmProps,
  { computed, reactive }: ISharedRenderlessParamHooks,
  { emit, constants, designConfig, vm }: IPopconfirmRenderlessParamUtils
): IPopconfirmApi => {
  const api = {} as IPopconfirmApi
  const designIcon = designConfig?.icons?.[props.type as string]
  const state = reactive({
    isLock: false,
    showPopover: false,
    getIcon: computed(() =>
      typeof props.type === 'object' ? props.type : designIcon || constants.ICON_MAP[props.type as string]
    )
  })

  Object.assign(api, {
    state,
    show: show({ state, emit, props }),
    hide: hide({ state, emit }),
    confirm: confirm({ state, emit }),
    handleEmit: handleEmit({ state, emit, vm })
  })

  return api
}
