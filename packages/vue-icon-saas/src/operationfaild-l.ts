import { svg } from '@opentiny/vue-common'
import OperationfaildL from '@opentiny/vue-theme-saas/svgs/operationfaild-l.svg'

const iconFn = () =>
  svg({ name: 'IconOperationfaildL', component: OperationfaildL, filledComponent: OperationfaildL })()

iconFn.__flag = { 'svgName': 'operationfaild-l', 'hasFill': false }
export default iconFn
