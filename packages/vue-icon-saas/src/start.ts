import { svg } from '@opentiny/vue-common'
import Start from '@opentiny/vue-theme-saas/svgs/start.svg'

const iconFn = () => svg({ name: 'IconStart', component: Start, filledComponent: Start })()

iconFn.__flag = { 'svgName': 'start', 'hasFill': false }
export default iconFn
