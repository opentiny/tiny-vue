import { svg } from '@opentiny/vue-common'
import Error from '@opentiny/vue-theme-saas/svgs/error.svg'

const iconFn = () => svg({ name: 'IconError', component: Error, filledComponent: Error })()

iconFn.__flag = { 'svgName': 'error', 'hasFill': false }
export default iconFn
