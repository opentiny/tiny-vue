import { svg } from '@opentiny/vue-common'
import Bank from '@opentiny/vue-theme-saas/svgs/bank.svg'
import BankFilled from '@opentiny/vue-theme-saas/svgs/bank-filled.svg'

const iconFn = () => svg({ name: 'IconBank', component: Bank, filledComponent: BankFilled })()
iconFn.__flag = { 'svgName': 'bank', 'hasFill': true }
export default iconFn
