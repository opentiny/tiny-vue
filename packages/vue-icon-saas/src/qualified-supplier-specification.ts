import { svg } from '@opentiny/vue-common'
import QualifiedSupplierSpecification from '@opentiny/vue-theme-saas/svgs/qualified-supplier-specification.svg'
import QualifiedSupplierSpecificationFilled from '@opentiny/vue-theme-saas/svgs/qualified-supplier-specification-filled.svg'

export default () =>
  svg({
    name: 'IconQualifiedSupplierSpecification',
    component: QualifiedSupplierSpecification,
    filledComponent: QualifiedSupplierSpecificationFilled
  })()
