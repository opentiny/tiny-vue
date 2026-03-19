import { svg } from '@opentiny/vue-common'
import Parameter from '@opentiny/vue-theme-saas/svgs/parameter.svg'
import ParameterFilled from '@opentiny/vue-theme-saas/svgs/parameter-filled.svg'

const iconFn = () => svg({ name: 'IconParameter', component: Parameter, filledComponent: ParameterFilled })()
iconFn.__flag = { 'svgName': 'parameter', 'hasFill': true }
export default iconFn
