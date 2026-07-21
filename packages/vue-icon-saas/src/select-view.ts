import { svg } from '@opentiny/vue-common'
import SelectView from '@opentiny/vue-theme-saas/svgs/select-view.svg'
import SelectViewFilled from '@opentiny/vue-theme-saas/svgs/select-view-filled.svg'

const iconFn = () => svg({ name: 'IconSelectView', component: SelectView, filledComponent: SelectViewFilled })()
iconFn.__flag = { 'svgName': 'select-view', 'hasFill': true }
export default iconFn
