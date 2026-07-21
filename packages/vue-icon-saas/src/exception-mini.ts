import { svg } from '@opentiny/vue-common'
import ExceptionMini from '@opentiny/vue-theme-saas/svgs/exception-mini.svg'

const iconFn = () => svg({ name: 'IconExceptionMini', component: ExceptionMini, filledComponent: ExceptionMini })()

iconFn.__flag = { 'svgName': 'exception-mini', 'hasFill': false }
export default iconFn
