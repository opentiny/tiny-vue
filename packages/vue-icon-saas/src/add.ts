import { svg } from '@opentiny/vue-common'
import Add from '@opentiny/vue-theme-saas/svgs/add.svg'

const iconFn = () => svg({ name: 'IconAdd', component: Add, filledComponent: Add })()

iconFn.__flag = { 'svgName': 'add', 'hasFill': false }
export default iconFn
