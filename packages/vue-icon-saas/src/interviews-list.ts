import { svg } from '@opentiny/vue-common'
import InterviewsList from '@opentiny/vue-theme-saas/svgs/interviews-list.svg'
import InterviewsListFilled from '@opentiny/vue-theme-saas/svgs/interviews-list-filled.svg'

const iconFn = () =>
  svg({ name: 'IconInterviewsList', component: InterviewsList, filledComponent: InterviewsListFilled })()
iconFn.__flag = { 'svgName': 'interviews-list', 'hasFill': true }
export default iconFn
