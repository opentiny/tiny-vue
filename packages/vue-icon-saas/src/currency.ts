import { svg } from '@opentiny/vue-common'
import Currency from '@opentiny/vue-theme-saas/svgs/currency.svg'
import CurrencyFilled from '@opentiny/vue-theme-saas/svgs/currency-filled.svg'

const iconFn = () => svg({ name: 'IconCurrency', component: Currency, filledComponent: CurrencyFilled })()
iconFn.__flag = { 'svgName': 'currency', 'hasFill': true }
export default iconFn
