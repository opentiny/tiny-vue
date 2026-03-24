import { svg } from '@opentiny/vue-common'
import Freeze from '@opentiny/vue-theme-saas/svgs/freeze.svg'

const iconFn = () => svg({ name: 'IconFreeze', component: Freeze, filledComponent: Freeze })()

iconFn.__flag = { 'svgName': 'freeze', 'hasFill': false }
export default iconFn
