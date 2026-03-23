import { svg } from '@opentiny/vue-common'
import ExceptionMiniO from '@opentiny/vue-theme-saas/svgs/exception-mini-o.svg'

const iconFn = () => svg({ name: 'IconExceptionMiniO', component: ExceptionMiniO, filledComponent: ExceptionMiniO })()

iconFn.__flag = { 'svgName': 'exception-mini-o', 'hasFill': false }
export default iconFn
