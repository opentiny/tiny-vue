import type {
  IPopconfirmApi,
  IPopconfirmProps,
  IPopconfirmRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@/types'
import { on, off } from '../common/deps/dom'
import { show, hide, confirm, handleEmit, handleDocumentClick } from './index'

export const api = ['state', 'show', 'hide', 'confirm', 'handleEmit']

export const renderless = (
  props: IPopconfirmProps,
  { computed, reactive, onMounted, onBeforeUnmount }: ISharedRenderlessParamHooks,
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
    confirm: confirm({ state, api }),
    handleEmit: handleEmit({ state, emit, vm }),
    handleDocumentClick: handleDocumentClick({ api, vm })
  })

  onMounted(() => {
    props.closeOnClickOutside && on(document, 'click', api.handleDocumentClick)
  })
  onBeforeUnmount(() => {
    props.closeOnClickOutside && off(document, 'click', api.handleDocumentClick)
  })

  return api
}
