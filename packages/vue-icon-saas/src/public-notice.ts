import { svg } from '@opentiny/vue-common'
import PublicNotice from '@opentiny/vue-theme-saas/svgs/public-notice.svg'
import PublicNoticeFilled from '@opentiny/vue-theme-saas/svgs/public-notice-filled.svg'

const iconFn = () => svg({ name: 'IconPublicNotice', component: PublicNotice, filledComponent: PublicNoticeFilled })()
iconFn.__flag = { 'svgName': 'public-notice', 'hasFill': true }
export default iconFn
