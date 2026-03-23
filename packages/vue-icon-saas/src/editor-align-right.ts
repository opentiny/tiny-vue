import { svg } from '@opentiny/vue-common'
import EditorAlignRight from '@opentiny/vue-theme-saas/svgs/editor-align-right.svg'
import EditorAlignRightFilled from '@opentiny/vue-theme-saas/svgs/editor-align-right-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorAlignRight', component: EditorAlignRight, filledComponent: EditorAlignRightFilled })()
iconFn.__flag = { 'svgName': 'editor-align-right', 'hasFill': true }
export default iconFn
