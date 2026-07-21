import { svg } from '@opentiny/vue-common'
import PutInWarehouse from '@opentiny/vue-theme-saas/svgs/put-in-warehouse.svg'
import PutInWarehouseFilled from '@opentiny/vue-theme-saas/svgs/put-in-warehouse-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPutInWarehouse', component: PutInWarehouse, filledComponent: PutInWarehouseFilled })()
iconFn.__flag = { 'svgName': 'put-in-warehouse', 'hasFill': true }
export default iconFn
