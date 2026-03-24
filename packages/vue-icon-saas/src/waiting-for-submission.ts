import { svg } from '@opentiny/vue-common'
import WaitingForSubmission from '@opentiny/vue-theme-saas/svgs/waiting-for-submission.svg'
import WaitingForSubmissionFilled from '@opentiny/vue-theme-saas/svgs/waiting-for-submission-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconWaitingForSubmission',
    component: WaitingForSubmission,
    filledComponent: WaitingForSubmissionFilled
  })()
iconFn.__flag = { 'svgName': 'waiting-for-submission', 'hasFill': true }
export default iconFn
