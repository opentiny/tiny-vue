import { svg } from '@opentiny/vue-common'
import Telephone from '@opentiny/vue-theme-saas/svgs/telephone.svg'
import TelephoneFilled from '@opentiny/vue-theme-saas/svgs/telephone-filled.svg'

const iconFn = () => svg({ name: 'IconTelephone', component: Telephone, filledComponent: TelephoneFilled })()
iconFn.__flag = { 'svgName': 'telephone', 'hasFill': true }
export default iconFn
