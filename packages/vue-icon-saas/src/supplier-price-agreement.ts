import { svg } from '@opentiny/vue-common'
import SupplierPriceAgreement from '@opentiny/vue-theme-saas/svgs/supplier-price-agreement.svg'
import SupplierPriceAgreementFilled from '@opentiny/vue-theme-saas/svgs/supplier-price-agreement-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconSupplierPriceAgreement',
    component: SupplierPriceAgreement,
    filledComponent: SupplierPriceAgreementFilled
  })()
iconFn.__flag = { 'svgName': 'supplier-price-agreement', 'hasFill': true }
export default iconFn
