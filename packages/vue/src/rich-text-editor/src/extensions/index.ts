import type { Component } from 'vue'
import ImageView from '../image-view.vue'
import CodeHighlight from '../code-highlight.vue'
export const ExtensionViewMap = new Map<string, Component>([
  ['image', ImageView],
  ['codeBlock', CodeHighlight]
])
