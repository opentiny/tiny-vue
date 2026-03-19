import { svg } from '@opentiny/vue-common'
import EditorItalic from '@opentiny/vue-theme-saas/svgs/editor-italic.svg'
import EditorItalicFilled from '@opentiny/vue-theme-saas/svgs/editor-italic-filled.svg'

const iconFn = () => svg({ name: 'IconEditorItalic', component: EditorItalic, filledComponent: EditorItalicFilled })()
iconFn.__flag = { 'svgName': 'editor-italic', 'hasFill': true }
export default iconFn
