import { svg } from '@opentiny/vue-common'
import ShareArrow from '@opentiny/vue-theme-saas/svgs/share-arrow.svg'
import ShareArrowFilled from '@opentiny/vue-theme-saas/svgs/share-arrow-filled.svg'

const iconFn = () => svg({ name: 'IconShareArrow', component: ShareArrow, filledComponent: ShareArrowFilled })()
iconFn.__flag = { 'svgName': 'share-arrow', 'hasFill': true }
export default iconFn
