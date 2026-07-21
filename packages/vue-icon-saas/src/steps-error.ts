import { svg } from '@opentiny/vue-common'
import StepsError from '@opentiny/vue-theme-saas/svgs/steps-error.svg'

const iconFn = () => svg({ name: 'IconStepsError', component: StepsError, filledComponent: StepsError })()

iconFn.__flag = { 'svgName': 'steps-error', 'hasFill': false }
export default iconFn
