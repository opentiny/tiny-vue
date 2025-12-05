import { svg } from '@opentiny/vue-common'
import InterviewsList from '@opentiny/vue-theme-saas/svgs/interviews-list.svg'
import InterviewsListFilled from '@opentiny/vue-theme-saas/svgs/interviews-list-filled.svg'

export default () =>
  svg({ name: 'IconInterviewsList', component: InterviewsList, filledComponent: InterviewsListFilled })()
