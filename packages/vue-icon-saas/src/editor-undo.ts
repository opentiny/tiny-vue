import { svg } from '@opentiny/vue-common'
import EditorUndo from '@opentiny/vue-theme-saas/svgs/editor-undo.svg'
import EditorUndoFilled from '@opentiny/vue-theme-saas/svgs/editor-undo-filled.svg'

const iconFn = () => svg({ name: 'IconEditorUndo', component: EditorUndo, filledComponent: EditorUndoFilled })()
iconFn.__flag = { 'svgName': 'editor-undo', 'hasFill': true }
export default iconFn
