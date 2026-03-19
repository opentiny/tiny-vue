import { svg } from '@opentiny/vue-common'
import Selection from '@opentiny/vue-theme-saas/svgs/selection.svg'
import SelectionFilled from '@opentiny/vue-theme-saas/svgs/selection-filled.svg'

const iconFn = () => svg({ name: 'IconSelection', component: Selection, filledComponent: SelectionFilled })()
iconFn.__flag = { 'svgName': 'selection', 'hasFill': true }
export default iconFn
