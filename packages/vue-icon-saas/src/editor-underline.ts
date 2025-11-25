import { svg } from '@opentiny/vue-common'
import EditorUnderline from '@opentiny/vue-theme-saas/svgs/editor-underline.svg'
import EditorUnderlineFilled from '@opentiny/vue-theme-saas/svgs/editor-underline-filled.svg'

export default () =>
  svg({ name: 'IconEditorUnderline', component: EditorUnderline, filledComponent: EditorUnderlineFilled })()
