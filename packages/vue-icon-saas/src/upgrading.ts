import { svg } from '@opentiny/vue-common'
import Upgrading from '@opentiny/vue-theme-saas/svgs/upgrading.svg'
import UpgradingFilled from '@opentiny/vue-theme-saas/svgs/upgrading-filled.svg'

const iconFn = () => svg({ name: 'IconUpgrading', component: Upgrading, filledComponent: UpgradingFilled })()
iconFn.__flag = { 'svgName': 'upgrading', 'hasFill': true }
export default iconFn
