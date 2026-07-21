import { svg } from '@opentiny/vue-common'
import EditorDeleteline from '@opentiny/vue-theme-saas/svgs/editor-deleteline.svg'
import EditorDeletelineFilled from '@opentiny/vue-theme-saas/svgs/editor-deleteline-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorDeleteline', component: EditorDeleteline, filledComponent: EditorDeletelineFilled })()
iconFn.__flag = { 'svgName': 'editor-deleteline', 'hasFill': true }
export default iconFn
