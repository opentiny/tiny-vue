import { handleClear, handeClick } from './index'

export const api = ['state', 'handleClear', 'focus', 'blur', 'handeClick']

export const renderless = (props, { reactive }, { dispatch, emit, designConfig }) => {
  const state = reactive({
    expandButtonIcon: designConfig?.icons?.expandButton || 'IconArrowBottom'
  })

  const api = {}
  Object.assign(api, {
    state,
    focus: () => state,
    blur: () => state,
    handleClear: handleClear({ dispatch, emit }),
    handeClick: handeClick({ props, emit })
  })

  return api
}
