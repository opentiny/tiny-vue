import { svg } from '@opentiny/vue-common'
import BadgeNewEn from '@opentiny/vue-theme-saas/svgs/badge-new-en.svg'

const iconFn = () => svg({ name: 'IconBadgeNewEn', component: BadgeNewEn, filledComponent: BadgeNewEn })()

iconFn.__flag = { 'svgName': 'badge-new-en', 'hasFill': false }
export default iconFn
