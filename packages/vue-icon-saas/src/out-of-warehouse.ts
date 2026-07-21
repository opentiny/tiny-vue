import { svg } from '@opentiny/vue-common'
import OutOfWarehouse from '@opentiny/vue-theme-saas/svgs/out-of-warehouse.svg'
import OutOfWarehouseFilled from '@opentiny/vue-theme-saas/svgs/out-of-warehouse-filled.svg'

const iconFn = () =>
  svg({ name: 'IconOutOfWarehouse', component: OutOfWarehouse, filledComponent: OutOfWarehouseFilled })()
iconFn.__flag = { 'svgName': 'out-of-warehouse', 'hasFill': true }
export default iconFn
