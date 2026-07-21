import { svg } from '@opentiny/vue-common'
import EditorListNum from '@opentiny/vue-theme-saas/svgs/editor-list-num.svg'
import EditorListNumFilled from '@opentiny/vue-theme-saas/svgs/editor-list-num-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorListNum', component: EditorListNum, filledComponent: EditorListNumFilled })()
iconFn.__flag = { 'svgName': 'editor-list-num', 'hasFill': true }
export default iconFn
