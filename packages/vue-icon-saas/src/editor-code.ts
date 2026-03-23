import { svg } from '@opentiny/vue-common'
import EditorCode from '@opentiny/vue-theme-saas/svgs/editor-code.svg'
import EditorCodeFilled from '@opentiny/vue-theme-saas/svgs/editor-code-filled.svg'

const iconFn = () => svg({ name: 'IconEditorCode', component: EditorCode, filledComponent: EditorCodeFilled })()
iconFn.__flag = { 'svgName': 'editor-code', 'hasFill': true }
export default iconFn
