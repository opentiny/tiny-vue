import { svg } from '@opentiny/vue-common'
import Group from '@opentiny/vue-theme-saas/svgs/group.svg'
import GroupFilled from '@opentiny/vue-theme-saas/svgs/group-filled.svg'

const iconFn = () => svg({ name: 'IconGroup', component: Group, filledComponent: GroupFilled })()
iconFn.__flag = { 'svgName': 'group', 'hasFill': true }
export default iconFn
