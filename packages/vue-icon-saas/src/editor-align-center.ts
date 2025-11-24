import { svg } from '@opentiny/vue-common'
import EditorAlignCenter from '@opentiny/vue-theme-saas/svgs/editor-align-center.svg'
import EditorAlignCenterFilled from '@opentiny/vue-theme-saas/svgs/editor-align-center-filled.svg'

export default () =>
  svg({ name: 'IconEditorAlignCenter', component: EditorAlignCenter, filledComponent: EditorAlignCenterFilled })()
