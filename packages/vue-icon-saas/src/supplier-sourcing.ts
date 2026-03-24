import { svg } from '@opentiny/vue-common'
import SupplierSourcing from '@opentiny/vue-theme-saas/svgs/supplier-sourcing.svg'
import SupplierSourcingFilled from '@opentiny/vue-theme-saas/svgs/supplier-sourcing-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSupplierSourcing', component: SupplierSourcing, filledComponent: SupplierSourcingFilled })()
iconFn.__flag = { 'svgName': 'supplier-sourcing', 'hasFill': true }
export default iconFn
