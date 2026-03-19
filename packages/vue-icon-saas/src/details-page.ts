import { svg } from '@opentiny/vue-common'
import DetailsPage from '@opentiny/vue-theme-saas/svgs/details-page.svg'
import DetailsPageFilled from '@opentiny/vue-theme-saas/svgs/details-page-filled.svg'

const iconFn = () => svg({ name: 'IconDetailsPage', component: DetailsPage, filledComponent: DetailsPageFilled })()
iconFn.__flag = { 'svgName': 'details-page', 'hasFill': true }
export default iconFn
