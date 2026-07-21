import { svg } from '@opentiny/vue-common'
import EditorList from '@opentiny/vue-theme-saas/svgs/editor-list.svg'

const iconFn = () => svg({ name: 'IconEditorList', component: EditorList, filledComponent: EditorList })()

iconFn.__flag = { 'svgName': 'editor-list', 'hasFill': false }
export default iconFn
