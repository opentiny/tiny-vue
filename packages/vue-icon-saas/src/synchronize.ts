import { svg } from '@opentiny/vue-common'
import Synchronize from '@opentiny/vue-theme-saas/svgs/synchronize.svg'

const iconFn = () => svg({ name: 'IconSynchronize', component: Synchronize, filledComponent: Synchronize })()

iconFn.__flag = { 'svgName': 'synchronize', 'hasFill': false }
export default iconFn
