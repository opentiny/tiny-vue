import { svg } from '@opentiny/vue-common'
import PlanningDocument from '@opentiny/vue-theme-saas/svgs/planning-document.svg'
import PlanningDocumentFilled from '@opentiny/vue-theme-saas/svgs/planning-document-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPlanningDocument', component: PlanningDocument, filledComponent: PlanningDocumentFilled })()
iconFn.__flag = { 'svgName': 'planning-document', 'hasFill': true }
export default iconFn
