import { svg } from '@opentiny/vue-common'
import EditorBold from '@opentiny/vue-theme-saas/svgs/editor-bold.svg'
import EditorBoldFilled from '@opentiny/vue-theme-saas/svgs/editor-bold-filled.svg'

const iconFn = () => svg({ name: 'IconEditorBold', component: EditorBold, filledComponent: EditorBoldFilled })()
iconFn.__flag = { 'svgName': 'editor-bold', 'hasFill': true }
export default iconFn
