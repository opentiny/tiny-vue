import { svg } from '@opentiny/vue-common'
import Picture from '@opentiny/vue-theme-saas/svgs/picture.svg'
import PictureFilled from '@opentiny/vue-theme-saas/svgs/picture-filled.svg'

const iconFn = () => svg({ name: 'IconPicture', component: Picture, filledComponent: PictureFilled })()
iconFn.__flag = { 'svgName': 'picture', 'hasFill': true }
export default iconFn
