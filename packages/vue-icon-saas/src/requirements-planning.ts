import { svg } from '@opentiny/vue-common'
import RequirementsPlanning from '@opentiny/vue-theme-saas/svgs/requirements-planning.svg'
import RequirementsPlanningFilled from '@opentiny/vue-theme-saas/svgs/requirements-planning-filled.svg'

export default () =>
  svg({
    name: 'IconRequirementsPlanning',
    component: RequirementsPlanning,
    filledComponent: RequirementsPlanningFilled
  })()
