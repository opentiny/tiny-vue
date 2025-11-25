import { svg } from '@opentiny/vue-common'
import EditorListNum from '@opentiny/vue-theme-saas/svgs/editor-list-num.svg'
import EditorListNumFilled from '@opentiny/vue-theme-saas/svgs/editor-list-num-filled.svg'

export default () =>
  svg({ name: 'IconEditorListNum', component: EditorListNum, filledComponent: EditorListNumFilled })()
