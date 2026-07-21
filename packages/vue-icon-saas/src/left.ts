import { svg } from '@opentiny/vue-common'
import Left from '@opentiny/vue-theme-saas/svgs/left.svg'

const iconFn = () => svg({ name: 'IconLeft', component: Left, filledComponent: Left })()

iconFn.__flag = { 'svgName': 'left', 'hasFill': false }
export default iconFn
