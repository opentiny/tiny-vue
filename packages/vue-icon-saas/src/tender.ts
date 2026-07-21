import { svg } from '@opentiny/vue-common'
import Tender from '@opentiny/vue-theme-saas/svgs/tender.svg'
import TenderFilled from '@opentiny/vue-theme-saas/svgs/tender-filled.svg'

const iconFn = () => svg({ name: 'IconTender', component: Tender, filledComponent: TenderFilled })()
iconFn.__flag = { 'svgName': 'tender', 'hasFill': true }
export default iconFn
