import { svg } from '@opentiny/vue-common'
import ShippingDocuments from '@opentiny/vue-theme-saas/svgs/shipping-documents.svg'
import ShippingDocumentsFilled from '@opentiny/vue-theme-saas/svgs/shipping-documents-filled.svg'

export default () =>
  svg({ name: 'IconShippingDocuments', component: ShippingDocuments, filledComponent: ShippingDocumentsFilled })()
