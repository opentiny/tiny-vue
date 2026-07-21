import { svg } from '@opentiny/vue-common'
import ProjectInvoice from '@opentiny/vue-theme-saas/svgs/project-invoice.svg'
import ProjectInvoiceFilled from '@opentiny/vue-theme-saas/svgs/project-invoice-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectInvoice', component: ProjectInvoice, filledComponent: ProjectInvoiceFilled })()
iconFn.__flag = { 'svgName': 'project-invoice', 'hasFill': true }
export default iconFn
