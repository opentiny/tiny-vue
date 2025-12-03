import { svg } from '@opentiny/vue-common'
import TelephoneCircle from '@opentiny/vue-theme-saas/svgs/telephone-circle.svg'
import TelephoneCircleFilled from '@opentiny/vue-theme-saas/svgs/telephone-circle-filled.svg'

export default () =>
  svg({ name: 'IconTelephoneCircle', component: TelephoneCircle, filledComponent: TelephoneCircleFilled })()
