import { svg } from '@opentiny/vue-common'
import EditorListDot from '@opentiny/vue-theme-saas/svgs/editor-list-dot.svg'
import EditorListDotFilled from '@opentiny/vue-theme-saas/svgs/editor-list-dot-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorListDot', component: EditorListDot, filledComponent: EditorListDotFilled })()
iconFn.__flag = { 'svgName': 'editor-list-dot', 'hasFill': true }
export default iconFn
