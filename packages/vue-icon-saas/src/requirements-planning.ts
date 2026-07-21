import { svg } from '@opentiny/vue-common'
import RequirementsPlanning from '@opentiny/vue-theme-saas/svgs/requirements-planning.svg'
import RequirementsPlanningFilled from '@opentiny/vue-theme-saas/svgs/requirements-planning-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconRequirementsPlanning',
    component: RequirementsPlanning,
    filledComponent: RequirementsPlanningFilled
  })()
iconFn.__flag = { 'svgName': 'requirements-planning', 'hasFill': true }
export default iconFn
