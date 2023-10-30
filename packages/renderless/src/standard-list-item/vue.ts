import { handleEnterDesc, handelIconClick, handleTitleClick } from './index'

export const api = ['state', 'handelIconClick', 'handleEnterDesc', 'handleTitleClick']

export const renderless = (props, { computed, reactive }, { emit }) => {
  const state = reactive({
    descTooltip: '',
    sliceNum: 2,
    iconNum: 3,
    effectOptions: computed(() => props.options.filter((item) => !item.hidden))
  })

  const api = {}
  Object.assign(api, {
    state,
    handleTitleClick: handleTitleClick({ props }),
    handelIconClick: handelIconClick({ emit }),
    handleEnterDesc: handleEnterDesc({ state, props })
  })

  return api
}
