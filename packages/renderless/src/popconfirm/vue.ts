import { show, hide, confirm } from './index'

export const api = ['state', 'show', 'hide', 'confirm']

export const renderless = (props, { computed, reactive }, { emit, constants, designConfig }) => {
  const api = {}
  const designIcon = designConfig?.icons?.[props.type]
  const state = reactive({
    isLock: false,
    showPopover: false,
    getIcon: computed(() => (typeof props.type === 'object' ? props.type : (designIcon || constants.ICON_MAP[props.type])))
  })

  Object.assign(api, {
    state,
    show: show({ state, emit, props }),
    hide: hide({ state, emit }),
    confirm: confirm({ state, emit }),
  })

  return api
}
