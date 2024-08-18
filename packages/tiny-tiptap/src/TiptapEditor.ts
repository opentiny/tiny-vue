import type { Content, Editor } from '@tiptap/core'
import { extensions } from './extension'

import { generateSlashMenuExtension } from './components/slash'
import { registerFloatMenuExtension } from './components/float'
import { registerBubbleMenuExtension } from './components/bubble'
import { setupCollaboration } from './components/collaboration'

const USERNAME_PREFIX = 'tiny-tiptap'

export default class TiptapEditor {
  options: any
  editor: Editor
  extensions: any[]
  /**
   * @param editorClass Editor 的构造类
   * @param options Editor 的配置项
   * @param config 其中 viewMap 和 menuMap 都可能存在使用组件传入的视图映射
   * @param config.viewMap 需要进行视图映射的扩展组件 由 key 和 view 组成 view 需要为 NodeView
   * @param config.menuMap 包括映射方法以及菜单等组件 view 需要为视图组件
   * @param config.placeholder 对 placeholder 的一些处理
   */
  constructor(editorClass, options = {}, config) {
    this.extensions = Array.from(extensions)
    const { viewMap, menuMap, nodeViewRender, collaboration } = config

    const { renderer, slashMenuView, floatMenuView, bubbleMenuView } = menuMap

    this.initExtensionViews(viewMap, nodeViewRender)

    if (slashMenuView) {
      this.initSlashMenu(renderer, slashMenuView)
    }

    if (collaboration) {
      setupCollaboration(this.extensions, collaboration)
    }

    this.initMiscOptions(config)

    // TODO 合并用户传入的 options
    this.options = {
      ...options,
      ...{
        extensions: this.extensions
      }
    }

    this.editor = this.createEditor(editorClass, this.options)

    if (floatMenuView) {
      this.initFloatingMenu(renderer, floatMenuView)
    }

    if (bubbleMenuView) {
      this.initBubbleMenu(renderer, bubbleMenuView)
    }

    if (collaboration) {
      this.initUsername()
    }
  }

  createEditor(editorClass, options) {
    return new editorClass(options)
  }

  getContent() {
    return this.editor.getHTML()
  }

  setContent(content: Content) {
    this.editor.commands.setContent(content)
  }

  destroy() {
    this.editor.destroy()
  }

  private initExtensionViews(viewMap: Map<string, any>, render: any) {
    // 根据传入的视图构建 重新继承扩展并重新 configure
    viewMap.forEach((view, key) => {
      const extensionIndex = this.extensions.findIndex((extension) => extension.name === key)
      const extension = this.extensions.at(extensionIndex)
      if (extension) {
        const originOption = extension.options
        const newExtension = extension
          .extend({
            addNodeView() {
              return render(view)
            }
          })
          .configure({ ...originOption })
        this.extensions[extensionIndex] = newExtension
      }
    })
  }

  private initSlashMenu(renderer, view) {
    const slashMenu = generateSlashMenuExtension(renderer, view)
    // 热更新会重复添加 slashMenu 此处用于 fix
    if (this.extensions.findIndex((extension) => extension.name === 'slashMenu') === -1) {
      this.extensions.push(slashMenu)
    }
  }

  private initFloatingMenu(renderer, view) {
    registerFloatMenuExtension(this.editor, renderer, view)
  }

  private initBubbleMenu(renderer, view) {
    registerBubbleMenuExtension(this.editor, renderer, view)
  }

  private initMiscOptions(config) {
    const { placeholder } = config
    const placeholderIndex = this.extensions.findIndex((extension) => extension.name === 'placeholder')
    const placeholderExtension = this.extensions[placeholderIndex]
    if (placeholderExtension) {
      this.extensions[placeholderIndex] = placeholderExtension.configure({
        placeholder
      })
    }
  }

  private initUsername() {
    // 获取随机的用户id
    const username = USERNAME_PREFIX + Math.random().toString().slice(2, 5)
    this.editor
      .chain()
      .focus()
      .updateUser({
        name: username,
        color: getRandomColor()
      })
      .run()
  }
}

/**
 * 生成随机的十六进制颜色值
 */
function getRandomColor() {
  let color = '#'
  let minValue = 64 // 避免颜色值过于接近 0（白色）

  for (let i = 0; i < 6; i++) {
    let digit = Math.floor(Math.random() * 16)
    if (digit < 8) {
      digit += minValue / 16
    }
    color += digit.toString(16).toUpperCase()
  }
  return color
}
