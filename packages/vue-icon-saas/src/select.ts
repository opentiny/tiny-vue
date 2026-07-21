import { svg } from '@opentiny/vue-common'
import Select from '@opentiny/vue-theme-saas/svgs/select.svg'
import SelectFilled from '@opentiny/vue-theme-saas/svgs/select-filled.svg'

const iconFn = () => svg({ name: 'IconSelect', component: Select, filledComponent: SelectFilled })()
iconFn.__flag = { 'svgName': 'select', 'hasFill': true }
export default iconFn
