import { svg } from '@opentiny/vue-common'
import Supplier from '@opentiny/vue-theme-saas/svgs/supplier.svg'
import SupplierFilled from '@opentiny/vue-theme-saas/svgs/supplier-filled.svg'

const iconFn = () => svg({ name: 'IconSupplier', component: Supplier, filledComponent: SupplierFilled })()
iconFn.__flag = { 'svgName': 'supplier', 'hasFill': true }
export default iconFn
