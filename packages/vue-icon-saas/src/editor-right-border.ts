import { svg } from '@opentiny/vue-common'
import EditorRightBorder from '@opentiny/vue-theme-saas/svgs/editor-right-border.svg'
import EditorRightBorderFilled from '@opentiny/vue-theme-saas/svgs/editor-right-border-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorRightBorder', component: EditorRightBorder, filledComponent: EditorRightBorderFilled })()
iconFn.__flag = { 'svgName': 'editor-right-border', 'hasFill': true }
export default iconFn
