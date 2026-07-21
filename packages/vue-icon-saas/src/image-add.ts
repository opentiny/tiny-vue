import { svg } from '@opentiny/vue-common'
import ImageAdd from '@opentiny/vue-theme-saas/svgs/image-add.svg'
import ImageAddFilled from '@opentiny/vue-theme-saas/svgs/image-add-filled.svg'

const iconFn = () => svg({ name: 'IconImageAdd', component: ImageAdd, filledComponent: ImageAddFilled })()
iconFn.__flag = { 'svgName': 'image-add', 'hasFill': true }
export default iconFn
