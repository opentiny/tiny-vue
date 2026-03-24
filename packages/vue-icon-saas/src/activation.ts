import { svg } from '@opentiny/vue-common'
import Activation from '@opentiny/vue-theme-saas/svgs/activation.svg'
import ActivationFilled from '@opentiny/vue-theme-saas/svgs/activation-filled.svg'

const iconFn = () => svg({ name: 'IconActivation', component: Activation, filledComponent: ActivationFilled })()
iconFn.__flag = { 'svgName': 'activation', 'hasFill': true }
export default iconFn
