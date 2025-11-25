import { svg } from '@opentiny/vue-common'
import SurchargeToBeSettled from '@opentiny/vue-theme-saas/svgs/surcharge-to-be-settled.svg'
import SurchargeToBeSettledFilled from '@opentiny/vue-theme-saas/svgs/surcharge-to-be-settled-filled.svg'

export default () =>
  svg({
    name: 'IconSurchargeToBeSettled',
    component: SurchargeToBeSettled,
    filledComponent: SurchargeToBeSettledFilled
  })()
