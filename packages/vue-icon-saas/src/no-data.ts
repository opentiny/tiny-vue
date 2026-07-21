import { svg } from '@opentiny/vue-common'
import NoData from '@opentiny/vue-theme-saas/svgs/no-data.svg'

const iconFn = () => svg({ name: 'IconNoData', component: NoData, filledComponent: NoData })()

iconFn.__flag = { 'svgName': 'no-data', 'hasFill': false }
export default iconFn
