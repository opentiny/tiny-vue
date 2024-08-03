import ImageView from './image-view.jsx'
import CodeHightlightView from './code-highlight-view.jsx'

export const extensionViewMap = new Map<string, any>([
  ['image', ImageView],
  ['codeBlock', CodeHightlightView]
])
