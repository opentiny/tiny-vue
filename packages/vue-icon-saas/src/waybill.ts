import { svg } from '@opentiny/vue-common'
import Waybill from '@opentiny/vue-theme-saas/svgs/waybill.svg'
import WaybillFilled from '@opentiny/vue-theme-saas/svgs/waybill-filled.svg'

const iconFn = () => svg({ name: 'IconWaybill', component: Waybill, filledComponent: WaybillFilled })()
iconFn.__flag = { 'svgName': 'waybill', 'hasFill': true }
export default iconFn
