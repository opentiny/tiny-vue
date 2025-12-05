import { svg } from '@opentiny/vue-common'
import ProjectInvoice from '@opentiny/vue-theme-saas/svgs/project-invoice.svg'
import ProjectInvoiceFilled from '@opentiny/vue-theme-saas/svgs/project-invoice-filled.svg'

export default () =>
  svg({ name: 'IconProjectInvoice', component: ProjectInvoice, filledComponent: ProjectInvoiceFilled })()
