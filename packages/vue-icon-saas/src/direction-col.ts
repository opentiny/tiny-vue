import { svg } from '@opentiny/vue-common'
import DirectionCol from '@opentiny/vue-theme-saas/svgs/direction-col.svg'

const iconFn = () => svg({ name: 'IconDirectionCol', component: DirectionCol, filledComponent: DirectionCol })()

iconFn.__flag = { 'svgName': 'direction-col', 'hasFill': false }
export default iconFn
