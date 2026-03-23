import { svg } from '@opentiny/vue-common'
import Shutdown from '@opentiny/vue-theme-saas/svgs/shutdown.svg'

const iconFn = () => svg({ name: 'IconShutdown', component: Shutdown, filledComponent: Shutdown })()

iconFn.__flag = { 'svgName': 'shutdown', 'hasFill': false }
export default iconFn
