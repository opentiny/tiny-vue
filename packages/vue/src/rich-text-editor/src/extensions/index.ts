import type { Component } from 'vue'
import ImageView from './image-view.vue'
import CodeHighlightView from './code-highlight-view.vue'

export const ExtensionViewMap = new Map<string, Component>([
  ['image', ImageView],
  ['codeBlock', CodeHighlightView]
])
