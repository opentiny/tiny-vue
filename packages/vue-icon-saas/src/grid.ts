import { svg } from '@opentiny/vue-common'
import Grid from '@opentiny/vue-theme-saas/svgs/grid.svg'
import GridFilled from '@opentiny/vue-theme-saas/svgs/grid-filled.svg'

const iconFn = () => svg({ name: 'IconGrid', component: Grid, filledComponent: GridFilled })()
iconFn.__flag = { 'svgName': 'grid', 'hasFill': true }
export default iconFn
