import { svg } from '@opentiny/vue-common'
import StartO from '@opentiny/vue-theme-saas/svgs/start-o.svg'

const iconFn = () => svg({ name: 'IconStartO', component: StartO, filledComponent: StartO })()

iconFn.__flag = { 'svgName': 'start-o', 'hasFill': false }
export default iconFn
