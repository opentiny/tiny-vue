import { svg } from '@opentiny/vue-common'
import SupplierQualification from '@opentiny/vue-theme-saas/svgs/supplier-qualification.svg'
import SupplierQualificationFilled from '@opentiny/vue-theme-saas/svgs/supplier-qualification-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconSupplierQualification',
    component: SupplierQualification,
    filledComponent: SupplierQualificationFilled
  })()
iconFn.__flag = { 'svgName': 'supplier-qualification', 'hasFill': true }
export default iconFn
