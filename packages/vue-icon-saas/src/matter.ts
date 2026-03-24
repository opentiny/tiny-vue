import { svg } from '@opentiny/vue-common'
import Matter from '@opentiny/vue-theme-saas/svgs/matter.svg'
import MatterFilled from '@opentiny/vue-theme-saas/svgs/matter-filled.svg'

const iconFn = () => svg({ name: 'IconMatter', component: Matter, filledComponent: MatterFilled })()
iconFn.__flag = { 'svgName': 'matter', 'hasFill': true }
export default iconFn
