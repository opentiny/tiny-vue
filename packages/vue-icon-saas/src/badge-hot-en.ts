import { svg } from '@opentiny/vue-common'
import BadgeHotEn from '@opentiny/vue-theme-saas/svgs/badge-hot-en.svg'

const iconFn = () => svg({ name: 'IconBadgeHotEn', component: BadgeHotEn, filledComponent: BadgeHotEn })()

iconFn.__flag = { 'svgName': 'badge-hot-en', 'hasFill': false }
export default iconFn
