import { handleEnterDesc, handelIconClick } from './index'

export const api = ['state', 'handelIconClick', 'handleEnterDesc']

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
    handelIconClick: handelIconClick({ emit }),
    handleEnterDesc: handleEnterDesc({ state, props })
  })

  return api
}
