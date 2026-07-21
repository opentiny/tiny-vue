import { svg } from '@opentiny/vue-common'
import QualifiedSupplierSpecification from '@opentiny/vue-theme-saas/svgs/qualified-supplier-specification.svg'
import QualifiedSupplierSpecificationFilled from '@opentiny/vue-theme-saas/svgs/qualified-supplier-specification-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconQualifiedSupplierSpecification',
    component: QualifiedSupplierSpecification,
    filledComponent: QualifiedSupplierSpecificationFilled
  })()
iconFn.__flag = { 'svgName': 'qualified-supplier-specification', 'hasFill': true }
export default iconFn
