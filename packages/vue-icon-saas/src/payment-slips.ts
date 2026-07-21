import { svg } from '@opentiny/vue-common'
import PaymentSlips from '@opentiny/vue-theme-saas/svgs/payment-slips.svg'
import PaymentSlipsFilled from '@opentiny/vue-theme-saas/svgs/payment-slips-filled.svg'

const iconFn = () => svg({ name: 'IconPaymentSlips', component: PaymentSlips, filledComponent: PaymentSlipsFilled })()
iconFn.__flag = { 'svgName': 'payment-slips', 'hasFill': true }
export default iconFn
