import type { ExtensionOptions } from '@/types'
import { Editor, Range } from '@tiptap/core'
import type { TaskListOptions } from '@tiptap/extension-task-list'
import TiptapTaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { iconRichTextTaskList } from '@opentiny/vue-icon'

const TaskList = TiptapTaskList.extend<ExtensionOptions & TaskListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getSlashMenus() {
        return [
          {
            priority: 40,
            icon: iconRichTextTaskList(),
            title: '任务列表',
            keywords: ['tasklist', 'renwuliebiao'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).toggleTaskList().run()
            }
          }
        ]
      },
      getFloatMenus() {
        return [
          {
            priority: 30,
            icon: iconRichTextTaskList(),
            action: ({ editor }: { editor: Editor }) => {
              return () => editor.chain().focus().toggleTaskList().run()
            }
          }
        ]
      }
    }
  },
  addExtensions() {
    return [TaskItem]
  }
})

export default TaskList
export { TaskItem, TaskListOptions }
