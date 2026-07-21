import { svg } from '@opentiny/vue-common'
import TotalVolume from '@opentiny/vue-theme-saas/svgs/total-volume.svg'
import TotalVolumeFilled from '@opentiny/vue-theme-saas/svgs/total-volume-filled.svg'

const iconFn = () => svg({ name: 'IconTotalVolume', component: TotalVolume, filledComponent: TotalVolumeFilled })()
iconFn.__flag = { 'svgName': 'total-volume', 'hasFill': true, 'wrongName': 'total-nolume' }
export default iconFn
