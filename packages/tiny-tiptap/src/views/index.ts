import ImageView from './image-view.tsx'
import CodeHightlightView from './code-highlight-view.tsx'

export const defaultViewMap = new Map<string, any>([
  ['image', ImageView],
  ['codeBlock', CodeHightlightView]
])
