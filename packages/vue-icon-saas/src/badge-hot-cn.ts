import { svg } from '@opentiny/vue-common'
import BadgeHotCn from '@opentiny/vue-theme-saas/svgs/badge-hot-cn.svg'

const iconFn = () => svg({ name: 'IconBadgeHotCn', component: BadgeHotCn, filledComponent: BadgeHotCn })()

iconFn.__flag = { 'svgName': 'badge-hot-cn', 'hasFill': false }
export default iconFn
