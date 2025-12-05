import { svg } from '@opentiny/vue-common'
import SupplierPriceAgreement from '@opentiny/vue-theme-saas/svgs/supplier-price-agreement.svg'
import SupplierPriceAgreementFilled from '@opentiny/vue-theme-saas/svgs/supplier-price-agreement-filled.svg'

export default () =>
  svg({
    name: 'IconSupplierPriceAgreement',
    component: SupplierPriceAgreement,
    filledComponent: SupplierPriceAgreementFilled
  })()
