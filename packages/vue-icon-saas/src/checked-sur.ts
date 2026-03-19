import { svg } from '@opentiny/vue-common'
import CheckedSur from '@opentiny/vue-theme-saas/svgs/checked-sur.svg'

const iconFn = () => svg({ name: 'IconCheckedSur', component: CheckedSur, filledComponent: CheckedSur })()

iconFn.__flag = { 'svgName': 'checked-sur', 'hasFill': false }
export default iconFn
