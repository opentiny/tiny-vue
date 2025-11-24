import { svg } from '@opentiny/vue-common'
import WarningTriangle from '@opentiny/vue-theme-saas/svgs/warning-triangle.svg'
import WarningTriangleFilled from '@opentiny/vue-theme-saas/svgs/warning-triangle-filled.svg'

export default () =>
  svg({ name: 'IconWarningTriangle', component: WarningTriangle, filledComponent: WarningTriangleFilled })()
