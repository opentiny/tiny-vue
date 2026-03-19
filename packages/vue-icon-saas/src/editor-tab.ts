import { svg } from '@opentiny/vue-common'
import EditorTab from '@opentiny/vue-theme-saas/svgs/editor-tab.svg'

const iconFn = () => svg({ name: 'IconEditorTab', component: EditorTab, filledComponent: EditorTab })()

iconFn.__flag = { 'svgName': 'editor-tab', 'hasFill': false }
export default iconFn
