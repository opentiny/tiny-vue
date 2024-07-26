import type { Component } from 'vue'
// import ImageView from './image-view.vue'
import ImageView from './image-view.tsx'
// import CodeHighlightView from './code-highlight-view.vue'
import CodeHighlightView from './code-highlight-view.tsx'

export const ExtensionViewMap = new Map<string, Component>([
  ['image', ImageView],
  ['codeBlock', CodeHighlightView]
])
