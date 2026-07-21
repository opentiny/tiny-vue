import { svg } from '@opentiny/vue-common'
import Success from '@opentiny/vue-theme-saas/svgs/success.svg'

const iconFn = () => svg({ name: 'IconSuccess', component: Success, filledComponent: Success })()

iconFn.__flag = { 'svgName': 'success', 'hasFill': false }
export default iconFn
