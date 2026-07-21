import { svg } from '@opentiny/vue-common'
import Crop from '@opentiny/vue-theme-saas/svgs/crop.svg'
import CropFilled from '@opentiny/vue-theme-saas/svgs/crop-filled.svg'

const iconFn = () => svg({ name: 'IconCrop', component: Crop, filledComponent: CropFilled })()
iconFn.__flag = { 'svgName': 'crop', 'hasFill': true }
export default iconFn
