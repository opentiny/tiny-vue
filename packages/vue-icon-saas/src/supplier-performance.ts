import { svg } from '@opentiny/vue-common'
import SupplierPerformance from '@opentiny/vue-theme-saas/svgs/supplier-performance.svg'
import SupplierPerformanceFilled from '@opentiny/vue-theme-saas/svgs/supplier-performance-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSupplierPerformance', component: SupplierPerformance, filledComponent: SupplierPerformanceFilled })()
iconFn.__flag = { 'svgName': 'supplier-performance', 'hasFill': true }
export default iconFn
