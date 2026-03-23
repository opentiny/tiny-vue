import { svg } from '@opentiny/vue-common'
import EditorAlignLeft from '@opentiny/vue-theme-saas/svgs/editor-align-left.svg'
import EditorAlignLeftFilled from '@opentiny/vue-theme-saas/svgs/editor-align-left-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorAlignLeft', component: EditorAlignLeft, filledComponent: EditorAlignLeftFilled })()
iconFn.__flag = { 'svgName': 'editor-align-left', 'hasFill': true }
export default iconFn
