import { svg } from '@opentiny/vue-common'
import EditorSubtitle from '@opentiny/vue-theme-saas/svgs/editor-subtitle.svg'
import EditorSubtitleFilled from '@opentiny/vue-theme-saas/svgs/editor-subtitle-filled.svg'

export default () =>
  svg({ name: 'IconEditorSubtitle', component: EditorSubtitle, filledComponent: EditorSubtitleFilled })()
