import { svg } from '@opentiny/vue-common'
import Exception from '@opentiny/vue-theme-saas/svgs/exception.svg'
import ExceptionFilled from '@opentiny/vue-theme-saas/svgs/exception-filled.svg'

const iconFn = () => svg({ name: 'IconException', component: Exception, filledComponent: ExceptionFilled })()
iconFn.__flag = { 'svgName': 'exception', 'hasFill': true }
export default iconFn
