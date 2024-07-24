import type { Editor, Range } from '@tiptap/core'
import type { Component } from 'vue'

export interface CommonMenuItem {
  priority: number
  title: string
  icon?: Component | string
}

export interface BubbleMenuItem extends CommonMenuItem {
  isActive?: ({ editor }: { editor: Editor }) => boolean
  isVisible?: ({ editor }: { editor: Editor }) => boolean
  action?: ({ editor }: { editor: Editor }) => void
}

export interface FloatMenuItem extends CommonMenuItem {}

export interface SlashMenuItem extends CommonMenuItem {
  icon: Component | string
  keywords: string[]
  command: ({ editor, range }: { editor: Editor; range: Range }) => void
}

export interface ExtensionOptions {
  /**
   * 气泡菜单扩展
   * 针对当前扩展所显示的内容 如选中文本 选中表格
   */
  getBubbleMenus?: ({ editor }: { editor: Editor }) => BubbleMenuItem[]

  /**
   * 浮动菜单扩展
   */
  getFloatMenus?: ({ editor }: { editor: Editor }) => FloatMenuItem[]

  /**
   * 斜杠菜单扩展
   */
  getSlashMenus?: () => SlashMenuItem[]
}
