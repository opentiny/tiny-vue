import { svg } from '@opentiny/vue-common'
import GridNoData from '@opentiny/vue-theme-saas/svgs/grid-no-data.svg'

const iconFn = () => svg({ name: 'IconGridNoData', component: GridNoData, filledComponent: GridNoData })()

iconFn.__flag = { 'svgName': 'grid-no-data', 'hasFill': false }
export default iconFn
