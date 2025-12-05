import { svg } from '@opentiny/vue-common'
import OutOfWarehouse from '@opentiny/vue-theme-saas/svgs/out-of-warehouse.svg'
import OutOfWarehouseFilled from '@opentiny/vue-theme-saas/svgs/out-of-warehouse-filled.svg'

export default () =>
  svg({ name: 'IconOutOfWarehouse', component: OutOfWarehouse, filledComponent: OutOfWarehouseFilled })()
