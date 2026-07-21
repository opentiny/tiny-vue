import { svg } from '@opentiny/vue-common'
import EditorSubtitle from '@opentiny/vue-theme-saas/svgs/editor-subtitle.svg'
import EditorSubtitleFilled from '@opentiny/vue-theme-saas/svgs/editor-subtitle-filled.svg'

const iconFn = () =>
  svg({ name: 'IconEditorSubtitle', component: EditorSubtitle, filledComponent: EditorSubtitleFilled })()
iconFn.__flag = { 'svgName': 'editor-subtitle', 'hasFill': true }
export default iconFn
