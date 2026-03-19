import { svg } from '@opentiny/vue-common'
import Up from '@opentiny/vue-theme-saas/svgs/up.svg'

const iconFn = () => svg({ name: 'IconUp', component: Up, filledComponent: Up })()

iconFn.__flag = { 'svgName': 'up', 'hasFill': false }
export default iconFn
