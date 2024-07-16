import { Extension } from '@tiptap/core'
import type { Content, Editor } from '@tiptap/core'
import { extensions } from './extension'

import { generateSlashMenuExtension } from './components/slash'

export default class TiptapEditor {
  options: any
  editor: Editor
  /**
   *
   * @param editorClass Editor 的构造类
   * @param options Editor 的配置项
   * @param viewMap 需要进行视图映射的扩展组件 由 key 和 view 组成
   * @param viewRender 包括映射方法以及菜单等组件
   */
  constructor(editorClass, options = {}, viewMap: Map<string, any>, viewRender) {
    // 根据传入的视图构建 重新继承扩展并重新 configure
    viewMap.forEach((view, key) => {
      const extensionIndex = extensions.findIndex((extension) => extension.name === key)
      const extension = extensions.at(extensionIndex)
      if (extension) {
        // console.log(extension, key, view)
        const originOption = extension.options
        const newExtension = extension
          .extend({
            addNodeView() {
              return view
              // return () => ({ dom: view })
            }
          })
          .configure({ ...originOption })
        extensions[extensionIndex] = newExtension
      }
    })

    const { renderer: Renderer, slashView } = viewRender

    const slashMenu = generateSlashMenuExtension(Renderer, slashView)
    extensions.push(slashMenu)

    this.options = {
      ...options,
      ...{
        extensions
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
}
