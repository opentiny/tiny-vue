import { svg } from '@opentiny/vue-common'
import Renew from '@opentiny/vue-theme-saas/svgs/renew.svg'
import RenewFilled from '@opentiny/vue-theme-saas/svgs/renew-filled.svg'

const iconFn = () => svg({ name: 'IconRenew', component: Renew, filledComponent: RenewFilled })()
iconFn.__flag = { 'svgName': 'renew', 'hasFill': true }
export default iconFn
