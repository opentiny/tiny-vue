import { svg } from '@opentiny/vue-common'
import EditorListDot from '@opentiny/vue-theme-saas/svgs/editor-list-dot.svg'
import EditorListDotFilled from '@opentiny/vue-theme-saas/svgs/editor-list-dot-filled.svg'

export default () =>
  svg({ name: 'IconEditorListDot', component: EditorListDot, filledComponent: EditorListDotFilled })()
