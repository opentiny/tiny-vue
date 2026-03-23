import { svg } from '@opentiny/vue-common'
import AIFollowUp from '@opentiny/vue-theme-saas/svgs/a-i-follow-up.svg'
import AIFollowUpFilled from '@opentiny/vue-theme-saas/svgs/a-i-follow-up-filled.svg'

const iconFn = () => svg({ name: 'IconAIFollowUp', component: AIFollowUp, filledComponent: AIFollowUpFilled })()
iconFn.__flag = { 'svgName': 'a-i-follow-up', 'hasFill': true }
export default iconFn
