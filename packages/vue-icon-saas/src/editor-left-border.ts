import { svg } from '@opentiny/vue-common'
import EditorLeftBorder from '@opentiny/vue-theme-saas/svgs/editor-left-border.svg'
import EditorLeftBorderFilled from '@opentiny/vue-theme-saas/svgs/editor-left-border-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorLeftBorder', component: EditorLeftBorder, filledComponent: EditorLeftBorderFilled })()
iconFn.__flag = { 'svgName': 'editor-left-border', 'hasFill': true }
export default iconFn
