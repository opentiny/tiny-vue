import { svg } from '@opentiny/vue-common'
import Onboarding from '@opentiny/vue-theme-saas/svgs/onboarding.svg'
import OnboardingFilled from '@opentiny/vue-theme-saas/svgs/onboarding-filled.svg'

const iconFn = () => svg({ name: 'IconOnboarding', component: Onboarding, filledComponent: OnboardingFilled })()
iconFn.__flag = { 'svgName': 'onboarding', 'hasFill': true }
export default iconFn
