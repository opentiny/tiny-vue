import { svg } from '@opentiny/vue-common'
import DirectionRow from '@opentiny/vue-theme-saas/svgs/direction-row.svg'

const iconFn = () => svg({ name: 'IconDirectionRow', component: DirectionRow, filledComponent: DirectionRow })()

iconFn.__flag = { 'svgName': 'direction-row', 'hasFill': false }
export default iconFn
