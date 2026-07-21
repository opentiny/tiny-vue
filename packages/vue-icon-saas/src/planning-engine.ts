import { svg } from '@opentiny/vue-common'
import PlanningEngine from '@opentiny/vue-theme-saas/svgs/planning-engine.svg'
import PlanningEngineFilled from '@opentiny/vue-theme-saas/svgs/planning-engine-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPlanningEngine', component: PlanningEngine, filledComponent: PlanningEngineFilled })()
iconFn.__flag = { 'svgName': 'planning-engine', 'hasFill': true }
export default iconFn
