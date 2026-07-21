import { svg } from '@opentiny/vue-common'
import DetailedList from '@opentiny/vue-theme-saas/svgs/detailed-list.svg'
import DetailedListFilled from '@opentiny/vue-theme-saas/svgs/detailed-list-filled.svg'

const iconFn = () => svg({ name: 'IconDetailedList', component: DetailedList, filledComponent: DetailedListFilled })()
iconFn.__flag = { 'svgName': 'detailed-list', 'hasFill': true }
export default iconFn
