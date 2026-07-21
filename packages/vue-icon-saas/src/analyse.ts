import { svg } from '@opentiny/vue-common'
import Analyse from '@opentiny/vue-theme-saas/svgs/analyse.svg'
import AnalyseFilled from '@opentiny/vue-theme-saas/svgs/analyse-filled.svg'

const iconFn = () => svg({ name: 'IconAnalyse', component: Analyse, filledComponent: AnalyseFilled })()
iconFn.__flag = { 'svgName': 'analyse', 'hasFill': true }
export default iconFn
