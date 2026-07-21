import { svg } from '@opentiny/vue-common'
import TelephoneCircle from '@opentiny/vue-theme-saas/svgs/telephone-circle.svg'
import TelephoneCircleFilled from '@opentiny/vue-theme-saas/svgs/telephone-circle-filled.svg'

const iconFn = () =>
  svg({ name: 'IconTelephoneCircle', component: TelephoneCircle, filledComponent: TelephoneCircleFilled })()
iconFn.__flag = { 'svgName': 'telephone-circle', 'hasFill': true }
export default iconFn
