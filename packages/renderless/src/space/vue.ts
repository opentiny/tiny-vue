import { getGapStyle, getAlignStyle, getJustifyStyle, getWrapStyle, getSpaceStyle, getDirectionStyle } from './index'

export const api = [
  'getGapStyle',
  'getAlignStyle',
  'getJustifyStyle',
  'getWrapStyle',
  'getDirectionStyle',
  'getSpaceStyle'
]
export const renderless = (props) => {
  const api = {
    getGapStyle: getGapStyle({ props }),
    getAlignStyle: getAlignStyle({ props }),
    getJustifyStyle: getJustifyStyle({ props }),
    getWrapStyle: getWrapStyle({ props }),
    getDirectionStyle: getDirectionStyle({ props })
  }

  api.getSpaceStyle = getSpaceStyle({ api })

  return api
}

export default renderless
