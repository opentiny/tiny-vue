import { svg } from '@opentiny/vue-common'
import EditorTextcolor from '@opentiny/vue-theme-saas/svgs/editor-textcolor.svg'
import EditorTextcolorFilled from '@opentiny/vue-theme-saas/svgs/editor-textcolor-filled.svg'

export default () =>
  svg({ name: 'IconEditorTextcolor', component: EditorTextcolor, filledComponent: EditorTextcolorFilled })()
