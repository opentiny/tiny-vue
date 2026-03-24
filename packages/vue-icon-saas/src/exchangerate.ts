import { svg } from '@opentiny/vue-common'
import Exchangerate from '@opentiny/vue-theme-saas/svgs/exchangerate.svg'
import ExchangerateFilled from '@opentiny/vue-theme-saas/svgs/exchangerate-filled.svg'

const iconFn = () => svg({ name: 'IconExchangerate', component: Exchangerate, filledComponent: ExchangerateFilled })()
iconFn.__flag = { 'svgName': 'exchangerate', 'hasFill': true }
export default iconFn
