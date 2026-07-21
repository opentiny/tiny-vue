import { svg } from '@opentiny/vue-common'
import Receivable from '@opentiny/vue-theme-saas/svgs/receivable.svg'
import ReceivableFilled from '@opentiny/vue-theme-saas/svgs/receivable-filled.svg'

const iconFn = () => svg({ name: 'IconReceivable', component: Receivable, filledComponent: ReceivableFilled })()
iconFn.__flag = { 'svgName': 'receivable', 'hasFill': true }
export default iconFn
