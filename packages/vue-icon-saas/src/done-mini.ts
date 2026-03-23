import { svg } from '@opentiny/vue-common'
import DoneMini from '@opentiny/vue-theme-saas/svgs/done-mini.svg'

const iconFn = () => svg({ name: 'IconDoneMini', component: DoneMini, filledComponent: DoneMini })()

iconFn.__flag = { 'svgName': 'done-mini', 'hasFill': false }
export default iconFn
