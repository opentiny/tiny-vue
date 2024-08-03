import type { ExtensionOptions } from '@/types'
import type { TaskItemOptions } from '@tiptap/extension-task-item'
import TiptapTaskItem from '@tiptap/extension-task-item'

const TaskItem = TiptapTaskItem.extend<ExtensionOptions & TaskItemOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default TaskItem
export { TaskItem, TaskItemOptions }
