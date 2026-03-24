import { svg } from '@opentiny/vue-common'
import BadgeNewCn from '@opentiny/vue-theme-saas/svgs/badge-new-cn.svg'

const iconFn = () => svg({ name: 'IconBadgeNewCn', component: BadgeNewCn, filledComponent: BadgeNewCn })()

iconFn.__flag = { 'svgName': 'badge-new-cn', 'hasFill': false }
export default iconFn
