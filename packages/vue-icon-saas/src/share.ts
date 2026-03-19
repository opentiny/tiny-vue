import { svg } from '@opentiny/vue-common'
import Share from '@opentiny/vue-theme-saas/svgs/share.svg'
import ShareFilled from '@opentiny/vue-theme-saas/svgs/share-filled.svg'

const iconFn = () => svg({ name: 'IconShare', component: Share, filledComponent: ShareFilled })()
iconFn.__flag = { 'svgName': 'share', 'hasFill': true }
export default iconFn
