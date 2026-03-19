import { svg } from '@opentiny/vue-common'
import EditorSub from '@opentiny/vue-theme-saas/svgs/editor-sub.svg'
import EditorSubFilled from '@opentiny/vue-theme-saas/svgs/editor-sub-filled.svg'

const iconFn = () => svg({ name: 'IconEditorSub', component: EditorSub, filledComponent: EditorSubFilled })()
iconFn.__flag = { 'svgName': 'editor-sub', 'hasFill': true }
export default iconFn
