import { svg } from '@opentiny/vue-common'
import AutomaticAssessment from '@opentiny/vue-theme-saas/svgs/automatic-assessment.svg'
import AutomaticAssessmentFilled from '@opentiny/vue-theme-saas/svgs/automatic-assessment-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAutomaticAssessment', component: AutomaticAssessment, filledComponent: AutomaticAssessmentFilled })()
iconFn.__flag = { 'svgName': 'automatic-assessment', 'hasFill': true }
export default iconFn
