import { svg } from '@opentiny/vue-common'
import EditorAlignLeft from '@opentiny/vue-theme-saas/svgs/editor-align-left.svg'
import EditorAlignLeftFilled from '@opentiny/vue-theme-saas/svgs/editor-align-left-filled.svg'

export default () =>
  svg({ name: 'IconEditorAlignLeft', component: EditorAlignLeft, filledComponent: EditorAlignLeftFilled })()
