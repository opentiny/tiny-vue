import { getGapStyle, getAlignStyle, getJustifyStyle, getWrapStyle, getDirectionStyle, getSpaceStyle } from './index'

export const api = [
  'getGapStyle',
  'getAlignStyle',
  'getJustifyStyle',
  'getWrapStyle',
  'getDirectionStyle',
  'getSpaceStyle'
]

export const renderless = (props, { computed }) => {
  const api: any = {
    getGapStyle: computed(getGapStyle({ props })),
    getAlignStyle: computed(getAlignStyle({ props })),
    getJustifyStyle: computed(getJustifyStyle({ props })),
    getWrapStyle: computed(getWrapStyle({ props })),
    getDirectionStyle: computed(getDirectionStyle({ props }))
  }

  api.getSpaceStyle = computed(getSpaceStyle({ api }))

  return api
}

export default renderless
