import { svg } from '@opentiny/vue-common'
import EditorDeleteline from '@opentiny/vue-theme-saas/svgs/editor-deleteline.svg'
import EditorDeletelineFilled from '@opentiny/vue-theme-saas/svgs/editor-deleteline-filled.svg'

export default () =>
  svg({ name: 'IconEditorDeleteline', component: EditorDeleteline, filledComponent: EditorDeletelineFilled })()
