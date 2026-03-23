import { svg } from '@opentiny/vue-common'
import PictureType from '@opentiny/vue-theme-saas/svgs/picture-type.svg'
import PictureTypeFilled from '@opentiny/vue-theme-saas/svgs/picture-type-filled.svg'

const iconFn = () => svg({ name: 'IconPictureType', component: PictureType, filledComponent: PictureTypeFilled })()
iconFn.__flag = { 'svgName': 'picture-type', 'hasFill': true }
export default iconFn
