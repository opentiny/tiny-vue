import { svg } from '@opentiny/vue-common'
import DownO from '@opentiny/vue-theme-saas/svgs/down-o.svg'

const iconFn = () => svg({ name: 'IconDownO', component: DownO, filledComponent: DownO })()

iconFn.__flag = { 'svgName': 'down-o', 'hasFill': false }
export default iconFn
