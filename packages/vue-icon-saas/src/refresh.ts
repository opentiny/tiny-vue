import { svg } from '@opentiny/vue-common'
import Refresh from '@opentiny/vue-theme-saas/svgs/refresh.svg'

const iconFn = () => svg({ name: 'IconRefresh', component: Refresh, filledComponent: Refresh })()

iconFn.__flag = { 'svgName': 'refresh', 'hasFill': false }
export default iconFn
