import { svg } from '@opentiny/vue-common'
import EditorRedo from '@opentiny/vue-theme-saas/svgs/editor-redo.svg'
import EditorRedoFilled from '@opentiny/vue-theme-saas/svgs/editor-redo-filled.svg'

const iconFn = () => svg({ name: 'IconEditorRedo', component: EditorRedo, filledComponent: EditorRedoFilled })()
iconFn.__flag = { 'svgName': 'editor-redo', 'hasFill': true }
export default iconFn
