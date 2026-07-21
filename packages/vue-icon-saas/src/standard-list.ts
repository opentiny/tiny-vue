import { svg } from '@opentiny/vue-common'
import StandardList from '@opentiny/vue-theme-saas/svgs/standard-list.svg'
import StandardListFilled from '@opentiny/vue-theme-saas/svgs/standard-list-filled.svg'

const iconFn = () => svg({ name: 'IconStandardList', component: StandardList, filledComponent: StandardListFilled })()
iconFn.__flag = { 'svgName': 'standard-list', 'hasFill': true }
export default iconFn
