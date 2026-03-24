import { svg } from '@opentiny/vue-common'
import Steps from '@opentiny/vue-theme-saas/svgs/steps.svg'
import StepsFilled from '@opentiny/vue-theme-saas/svgs/steps-filled.svg'

const iconFn = () => svg({ name: 'IconSteps', component: Steps, filledComponent: StepsFilled })()
iconFn.__flag = { 'svgName': 'steps', 'hasFill': true }
export default iconFn
