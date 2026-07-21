import { svg } from '@opentiny/vue-common'
import Input from '@opentiny/vue-theme-saas/svgs/input.svg'
import InputFilled from '@opentiny/vue-theme-saas/svgs/input-filled.svg'

const iconFn = () => svg({ name: 'IconInput', component: Input, filledComponent: InputFilled })()
iconFn.__flag = { 'svgName': 'input', 'hasFill': true }
export default iconFn
