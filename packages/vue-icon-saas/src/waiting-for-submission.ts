import { svg } from '@opentiny/vue-common'
import WaitingForSubmission from '@opentiny/vue-theme-saas/svgs/waiting-for-submission.svg'
import WaitingForSubmissionFilled from '@opentiny/vue-theme-saas/svgs/waiting-for-submission-filled.svg'

export default () =>
  svg({
    name: 'IconWaitingForSubmission',
    component: WaitingForSubmission,
    filledComponent: WaitingForSubmissionFilled
  })()
