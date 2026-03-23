import { svg } from '@opentiny/vue-common'
import ListOfPermissionsToTransferGoods from '@opentiny/vue-theme-saas/svgs/list-of-permissions-to-transfer-goods.svg'
import ListOfPermissionsToTransferGoodsFilled from '@opentiny/vue-theme-saas/svgs/list-of-permissions-to-transfer-goods-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconListOfPermissionsToTransferGoods',
    component: ListOfPermissionsToTransferGoods,
    filledComponent: ListOfPermissionsToTransferGoodsFilled
  })()
iconFn.__flag = { 'svgName': 'list-of-permissions-to-transfer-goods', 'hasFill': true }
export default iconFn
