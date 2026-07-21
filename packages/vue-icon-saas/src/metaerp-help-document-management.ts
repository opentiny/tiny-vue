import { svg } from '@opentiny/vue-common'
import MetaerpHelpDocumentManagement from '@opentiny/vue-theme-saas/svgs/metaerp-help-document-management.svg'
import MetaerpHelpDocumentManagementFilled from '@opentiny/vue-theme-saas/svgs/metaerp-help-document-management-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconMetaerpHelpDocumentManagement',
    component: MetaerpHelpDocumentManagement,
    filledComponent: MetaerpHelpDocumentManagementFilled
  })()
iconFn.__flag = { 'svgName': 'metaerp-help-document-management', 'hasFill': true }
export default iconFn
