import { svg } from '@opentiny/vue-common'
import MainFreightToBeSettled from '@opentiny/vue-theme-saas/svgs/main-freight-to-be-settled.svg'
import MainFreightToBeSettledFilled from '@opentiny/vue-theme-saas/svgs/main-freight-to-be-settled-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconMainFreightToBeSettled',
    component: MainFreightToBeSettled,
    filledComponent: MainFreightToBeSettledFilled
  })()
iconFn.__flag = { 'svgName': 'main-freight-to-be-settled', 'hasFill': true }
export default iconFn
