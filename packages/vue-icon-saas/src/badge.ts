import { svg } from '@opentiny/vue-common'
import Badge from '@opentiny/vue-theme-saas/svgs/badge.svg'
import BadgeFilled from '@opentiny/vue-theme-saas/svgs/badge-filled.svg'

const iconFn = () => svg({ name: 'IconBadge', component: Badge, filledComponent: BadgeFilled })()
iconFn.__flag = { 'svgName': 'badge', 'hasFill': true }
export default iconFn
