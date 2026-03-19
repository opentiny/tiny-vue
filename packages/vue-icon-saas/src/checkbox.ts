import { svg } from '@opentiny/vue-common'
import Checkbox from '@opentiny/vue-theme-saas/svgs/checkbox.svg'
import CheckboxFilled from '@opentiny/vue-theme-saas/svgs/checkbox-filled.svg'

const iconFn = () => svg({ name: 'IconCheckbox', component: Checkbox, filledComponent: CheckboxFilled })()
iconFn.__flag = { 'svgName': 'checkbox', 'hasFill': true }
export default iconFn
