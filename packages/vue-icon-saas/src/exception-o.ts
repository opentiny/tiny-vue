import { svg } from '@opentiny/vue-common'
import ExceptionO from '@opentiny/vue-theme-saas/svgs/exception-o.svg'

const iconFn = () => svg({ name: 'IconExceptionO', component: ExceptionO, filledComponent: ExceptionO })()

iconFn.__flag = { 'svgName': 'exception-o', 'hasFill': false }
export default iconFn
