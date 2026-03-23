import { svg } from '@opentiny/vue-common'
import Operationfaild from '@opentiny/vue-theme-saas/svgs/operationfaild.svg'

const iconFn = () => svg({ name: 'IconOperationfaild', component: Operationfaild, filledComponent: Operationfaild })()

iconFn.__flag = { 'svgName': 'operationfaild', 'hasFill': false }
export default iconFn
