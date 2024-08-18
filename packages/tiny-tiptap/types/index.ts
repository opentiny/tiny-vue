import type { Editor, Range } from '@tiptap/core'
import type { EditorState } from '@/src/pm'

export interface CommonMenuItem {
  priority: number
  title: string
  icon?: HTMLOrSVGElement | string
}

export interface BubbleMenuItem extends CommonMenuItem {
  isActive?: ({ editor }: { editor: Editor }) => boolean
  isVisible?: ({ editor }: { editor: Editor }) => boolean
  isDisabled?: ({ editor }: { editor: Editor }) => boolean
  action?: ({ editor }: { editor: Editor }) => void
}

export interface FloatMenuItem extends Omit<CommonMenuItem, 'title'> {
  action: ({ editor }: { editor: Editor }) => Function
}

export interface SlashMenuItem extends CommonMenuItem {
  icon: HTMLElement | string
  keywords: string[]
  command: ({ editor, range }: { editor: Editor; range: Range }) => void
}

export interface BubbleMenuInstance {
  items: BubbleMenuItem[]
  pluginKey: string
  shouldShow: (props: { editor: Editor; state: EditorState }) => boolean
}

export interface ExtensionOptions {
  /**
   * 气泡菜单扩展
   * 针对当前扩展所显示的内容 如选中文本 选中表格
   */
  getBubbleMenu: ({ editor }: { editor: Editor }) => BubbleMenuInstance

  /**
   * 浮动菜单扩展
   */
  getFloatMenus?: ({ editor }: { editor: Editor }) => FloatMenuItem[]

  /**
   * 斜杠菜单扩展
   */
  getSlashMenus?: () => SlashMenuItem[]
}
