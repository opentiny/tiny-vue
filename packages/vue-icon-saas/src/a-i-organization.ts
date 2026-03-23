import { svg } from '@opentiny/vue-common'
import AIOrganization from '@opentiny/vue-theme-saas/svgs/a-i-organization.svg'
import AIOrganizationFilled from '@opentiny/vue-theme-saas/svgs/a-i-organization-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAIOrganization', component: AIOrganization, filledComponent: AIOrganizationFilled })()
iconFn.__flag = { 'svgName': 'a-i-organization', 'hasFill': true }
export default iconFn
