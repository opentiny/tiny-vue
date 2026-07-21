import { svg } from '@opentiny/vue-common'
import AIConferenceManagement from '@opentiny/vue-theme-saas/svgs/a-i-conference-management.svg'
import AIConferenceManagementFilled from '@opentiny/vue-theme-saas/svgs/a-i-conference-management-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconAIConferenceManagement',
    component: AIConferenceManagement,
    filledComponent: AIConferenceManagementFilled
  })()
iconFn.__flag = { 'svgName': 'a-i-conference-management', 'hasFill': true }
export default iconFn
