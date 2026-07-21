import { svg } from '@opentiny/vue-common'
import RichTextTaskList from '@opentiny/vue-theme-saas/svgs/rich-text-task-list.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextTaskList', component: RichTextTaskList, filledComponent: RichTextTaskList })()

iconFn.__flag = { 'svgName': 'rich-text-task-list', 'hasFill': false }
export default iconFn
