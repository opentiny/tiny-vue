import { svg } from '@opentiny/vue-common'
import EditorLeftBorder from '@opentiny/vue-theme-saas/svgs/editor-left-border.svg'
import EditorLeftBorderFilled from '@opentiny/vue-theme-saas/svgs/editor-left-border-filled.svg'

export default () =>
  svg({ name: 'IconEditorLeftBorder', component: EditorLeftBorder, filledComponent: EditorLeftBorderFilled })()
