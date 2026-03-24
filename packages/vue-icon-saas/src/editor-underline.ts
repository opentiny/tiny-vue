import { svg } from '@opentiny/vue-common'
import EditorUnderline from '@opentiny/vue-theme-saas/svgs/editor-underline.svg'
import EditorUnderlineFilled from '@opentiny/vue-theme-saas/svgs/editor-underline-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorUnderline', component: EditorUnderline, filledComponent: EditorUnderlineFilled })()
iconFn.__flag = { 'svgName': 'editor-underline', 'hasFill': true }
export default iconFn
