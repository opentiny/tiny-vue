import ImageView from './image-view.tsx'
import CodeHightlightView from './code-highlight-view.tsx'

export const extensionViewMap = new Map<string, any>([
  ['image', ImageView],
  ['codeBlock', CodeHightlightView]
])
