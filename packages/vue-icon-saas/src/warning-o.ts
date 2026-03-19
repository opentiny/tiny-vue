import { svg } from '@opentiny/vue-common'
import WarningO from '@opentiny/vue-theme-saas/svgs/warning-o.svg'

const iconFn = () => svg({ name: 'IconWarningO', component: WarningO, filledComponent: WarningO })()

iconFn.__flag = { 'svgName': 'warning-o', 'hasFill': false }
export default iconFn
