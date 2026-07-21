import { svg } from '@opentiny/vue-common'
import SpreadGrid from '@opentiny/vue-theme-saas/svgs/spread-grid.svg'
import SpreadGridFilled from '@opentiny/vue-theme-saas/svgs/spread-grid-filled.svg'

const iconFn = () => svg({ name: 'IconSpreadGrid', component: SpreadGrid, filledComponent: SpreadGridFilled })()
iconFn.__flag = { 'svgName': 'spread-grid', 'hasFill': true }
export default iconFn
