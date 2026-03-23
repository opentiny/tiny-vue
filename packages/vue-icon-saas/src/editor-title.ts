import { svg } from '@opentiny/vue-common'
import EditorTitle from '@opentiny/vue-theme-saas/svgs/editor-title.svg'
import EditorTitleFilled from '@opentiny/vue-theme-saas/svgs/editor-title-filled.svg'

const iconFn = () => svg({ name: 'IconEditorTitle', component: EditorTitle, filledComponent: EditorTitleFilled })()
iconFn.__flag = { 'svgName': 'editor-title', 'hasFill': true }
export default iconFn
