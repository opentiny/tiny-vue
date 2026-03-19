import { svg } from '@opentiny/vue-common'
import Scan from '@opentiny/vue-theme-saas/svgs/scan.svg'

const iconFn = () => svg({ name: 'IconScan', component: Scan, filledComponent: Scan })()

iconFn.__flag = { 'svgName': 'scan', 'hasFill': false }
export default iconFn
