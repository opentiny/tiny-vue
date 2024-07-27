import type { Content, Editor } from '@tiptap/core'
import { extensions } from './extension'
import { defaultViewMap } from './views'

import { generateSlashMenuExtension } from './components/slash'

export default class TiptapEditor {
  options: any
  editor: Editor
  extensions: any[]
  /**
   * @param editorClass Editor 的构造类
   * @param options Editor 的配置项
   * @param viewOptions 其中 viewMap 和 menuMap 都可能存在使用组件传入的视图映射
   * @param viewOptions.viewMap 需要进行视图映射的扩展组件 由 key 和 view 组成 view 需要为 NodeView
   * @param viewOptions.menuMap 包括映射方法以及菜单等组件 view 需要为视图组件
   * @param otherOptions
   */
  constructor(editorClass, options = {}, viewOptions, otherOptions) {
    this.extensions = extensions
    const { viewMap, menuMap, nodeViewRender } = viewOptions

    this.initExtensionViews(viewMap, nodeViewRender)

    this.initMenuViews(menuMap)

    this.initOtherOptions(otherOptions)

    // TODO 合并用户传入的 options
    this.options = {
      ...options,
      ...{
        extensions: this.extensions
      }
    }

    this.editor = this.createEditor(editorClass, this.options)
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

  private initExtensionViews(viewMap?: Map<string, any>, render) {
    // 如果存在通过用户传入的视图 设为更优先
    if (viewMap?.size) {
      viewMap.forEach((view, key) => {
        defaultViewMap.set(key, view)
      })
    }
    // 根据传入的视图构建 重新继承扩展并重新 configure
    defaultViewMap.forEach((view, key) => {
      const extensionIndex = this.extensions.findIndex((extension) => extension.name === key)
      const extension = this.extensions.at(extensionIndex)
      if (extension) {
        const originOption = extension.options
        const newExtension = extension
          .extend({
            addNodeView() {
              return render(view)
              // return () => ({ dom: view })
            }
          })
          .configure({ ...originOption })
        this.extensions[extensionIndex] = newExtension
      }
    })
  }

  private initMenuViews(menuMap) {
    const { renderer: Renderer, slashView } = menuMap

    const slashMenu = generateSlashMenuExtension(Renderer, slashView)
    this.extensions.push(slashMenu)
  }

  private initOtherOptions(otherOptions) {
    const { placeholder } = otherOptions
    const placeholderIndex = this.extensions.findIndex((extension) => extension.name === 'placeholder')
    const placeholderExtension = this.extensions[placeholderIndex]
    if (placeholderExtension) {
      this.extensions[placeholderIndex] = placeholderExtension.configure({
        placeholder
      })
    }
  }
}
