import { svg } from '@opentiny/vue-common'
import ProDetailedList from '@opentiny/vue-theme-saas/svgs/pro-detailed-list.svg'

const iconFn = () =>
  svg({ name: 'IconProDetailedList', component: ProDetailedList, filledComponent: ProDetailedList })()

iconFn.__flag = { 'svgName': 'pro-detailed-list', 'hasFill': false }
export default iconFn
