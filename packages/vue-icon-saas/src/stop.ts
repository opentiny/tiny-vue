import { svg } from '@opentiny/vue-common'
import Stop from '@opentiny/vue-theme-saas/svgs/stop.svg'

const iconFn = () => svg({ name: 'IconStop', component: Stop, filledComponent: Stop })()

iconFn.__flag = { 'svgName': 'stop', 'hasFill': false }
export default iconFn
