import { svg } from '@opentiny/vue-common'
import SupplierQuotaAgreement from '@opentiny/vue-theme-saas/svgs/supplier-quota-agreement.svg'
import SupplierQuotaAgreementFilled from '@opentiny/vue-theme-saas/svgs/supplier-quota-agreement-filled.svg'

export default () =>
  svg({
    name: 'IconSupplierQuotaAgreement',
    component: SupplierQuotaAgreement,
    filledComponent: SupplierQuotaAgreementFilled
  })()
