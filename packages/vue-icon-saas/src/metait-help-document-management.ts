import { svg } from '@opentiny/vue-common'
import MetaitHelpDocumentManagement from '@opentiny/vue-theme-saas/svgs/metait-help-document-management.svg'
import MetaitHelpDocumentManagementFilled from '@opentiny/vue-theme-saas/svgs/metait-help-document-management-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconMetaitHelpDocumentManagement',
    component: MetaitHelpDocumentManagement,
    filledComponent: MetaitHelpDocumentManagementFilled
  })()
iconFn.__flag = { 'svgName': 'metait-help-document-management', 'hasFill': true }
export default iconFn
