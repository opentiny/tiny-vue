import { svg } from '@opentiny/vue-common'
import DefinitionOfProcessRoles from '@opentiny/vue-theme-saas/svgs/definition-of-process-roles.svg'
import DefinitionOfProcessRolesFilled from '@opentiny/vue-theme-saas/svgs/definition-of-process-roles-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconDefinitionOfProcessRoles',
    component: DefinitionOfProcessRoles,
    filledComponent: DefinitionOfProcessRolesFilled
  })()
iconFn.__flag = { 'svgName': 'definition-of-process-roles', 'hasFill': true }
export default iconFn
