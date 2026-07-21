import { svg } from '@opentiny/vue-common'
import EditorMenuLeft from '@opentiny/vue-theme-saas/svgs/editor-menu-left.svg'
import EditorMenuLeftFilled from '@opentiny/vue-theme-saas/svgs/editor-menu-left-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorMenuLeft', component: EditorMenuLeft, filledComponent: EditorMenuLeftFilled })()
iconFn.__flag = { 'svgName': 'editor-menu-left', 'hasFill': true }
export default iconFn
