import { svg } from '@opentiny/vue-common'
import SurchargeToBeSettled from '@opentiny/vue-theme-saas/svgs/surcharge-to-be-settled.svg'
import SurchargeToBeSettledFilled from '@opentiny/vue-theme-saas/svgs/surcharge-to-be-settled-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconSurchargeToBeSettled',
    component: SurchargeToBeSettled,
    filledComponent: SurchargeToBeSettledFilled
  })()
iconFn.__flag = { 'svgName': 'surcharge-to-be-settled', 'hasFill': true }
export default iconFn
