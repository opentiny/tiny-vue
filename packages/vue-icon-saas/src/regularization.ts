import { svg } from '@opentiny/vue-common'
import Regularization from '@opentiny/vue-theme-saas/svgs/regularization.svg'
import RegularizationFilled from '@opentiny/vue-theme-saas/svgs/regularization-filled.svg'

const iconFn = () =>
  svg({ name: 'IconRegularization', component: Regularization, filledComponent: RegularizationFilled })()
iconFn.__flag = { 'svgName': 'regularization', 'hasFill': true }
export default iconFn
