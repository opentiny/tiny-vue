import { svg } from '@opentiny/vue-common'
import EditorEraser from '@opentiny/vue-theme-saas/svgs/editor-eraser.svg'
import EditorEraserFilled from '@opentiny/vue-theme-saas/svgs/editor-eraser-filled.svg'

const iconFn = () => svg({ name: 'IconEditorEraser', component: EditorEraser, filledComponent: EditorEraserFilled })()
iconFn.__flag = { 'svgName': 'editor-eraser', 'hasFill': true }
export default iconFn
