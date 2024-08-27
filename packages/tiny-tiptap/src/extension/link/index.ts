import type { ExtensionOptions } from '@/types'
import type { LinkOptions } from '@tiptap/extension-link'
import type { Editor } from '@tiptap/core'
import TiptapLink from '@tiptap/extension-link'
import { IconRichTextLink, IconRichTextLinkUnlink } from '@opentiny/vue-icon'

const Link = TiptapLink.extend<ExtensionOptions & LinkOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'link',
            icon: IconRichTextLink(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                // TODO 优化 link 的输入方式
                setLink(editor)()
              }
            }
          },
          {
            key: 'unlink',
            icon: IconRichTextLinkUnlink(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().unsetLink().run()
              }
            }
          }
        ]
      }
    }
  }
})

function setLink(editor: Editor) {
  return () => {
    const previousUrl = editor.getAttributes('link').href
    if (previousUrl) {
      editor.chain().focus().toggleMark('link').run()
      return
    }
    const url = window.prompt('URL', previousUrl)
    if (url === null) {
      return
    }
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }
}

export default Link
export { Link, LinkOptions }
