import { svg } from '@opentiny/vue-common'
import ListOfCandidates from '@opentiny/vue-theme-saas/svgs/list-of-candidates.svg'
import ListOfCandidatesFilled from '@opentiny/vue-theme-saas/svgs/list-of-candidates-filled.svg'

const iconFn = () =>
  svg({ name: 'IconListOfCandidates', component: ListOfCandidates, filledComponent: ListOfCandidatesFilled })()
iconFn.__flag = { 'svgName': 'list-of-candidates', 'hasFill': true }
export default iconFn
