import { svg } from '@opentiny/vue-common'
import OffLine from '@opentiny/vue-theme-saas/svgs/off-line.svg'

const iconFn = () => svg({ name: 'IconOffLine', component: OffLine, filledComponent: OffLine })()

iconFn.__flag = { 'svgName': 'off-line', 'hasFill': false }
export default iconFn
