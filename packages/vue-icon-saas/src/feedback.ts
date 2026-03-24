import { svg } from '@opentiny/vue-common'
import Feedback from '@opentiny/vue-theme-saas/svgs/feedback.svg'

const iconFn = () => svg({ name: 'IconFeedback', component: Feedback, filledComponent: Feedback })()

iconFn.__flag = { 'svgName': 'feedback', 'hasFill': false }
export default iconFn
