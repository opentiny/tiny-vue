import { handleEnterDesc, handelIconClick, handleTitleClick, computedOptions } from './index'

export const api = ['state', 'handelIconClick', 'handleEnterDesc', 'handleTitleClick', 'computedOptions']

export const renderless = (props, { computed, reactive }, { emit }) => {
  const api = {}
  const state = reactive({
    descTooltip: '',
    sliceNum: 2,
    iconNum: 3,
    effectOptions: computed(() => api.computedOptions())
  })

  Object.assign(api, {
    state,
    handleTitleClick: handleTitleClick({ props }),
    handelIconClick: handelIconClick({ emit }),
    handleEnterDesc: handleEnterDesc({ state, props }),
    computedOptions: computedOptions({ props })
  })

  return api
}
