import { svg } from '@opentiny/vue-common'
import AskForLeave from '@opentiny/vue-theme-saas/svgs/ask-for-leave.svg'
import AskForLeaveFilled from '@opentiny/vue-theme-saas/svgs/ask-for-leave-filled.svg'

const iconFn = () => svg({ name: 'IconAskForLeave', component: AskForLeave, filledComponent: AskForLeaveFilled })()
iconFn.__flag = { 'svgName': 'ask-for-leave', 'hasFill': true }
export default iconFn
