import { svg } from '@opentiny/vue-common'
import MainFreightSettled from '@opentiny/vue-theme-saas/svgs/main-freight-settled.svg'
import MainFreightSettledFilled from '@opentiny/vue-theme-saas/svgs/main-freight-settled-filled.svg'

const iconFn = () =>
  svg({ name: 'IconMainFreightSettled', component: MainFreightSettled, filledComponent: MainFreightSettledFilled })()
iconFn.__flag = { 'svgName': 'main-freight-settled', 'hasFill': true }
export default iconFn
