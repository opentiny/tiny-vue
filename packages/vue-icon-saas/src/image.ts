import { svg } from '@opentiny/vue-common'
import Image from '@opentiny/vue-theme-saas/svgs/image.svg'
import ImageFilled from '@opentiny/vue-theme-saas/svgs/image-filled.svg'

const iconFn = () => svg({ name: 'IconImage', component: Image, filledComponent: ImageFilled })()
iconFn.__flag = { 'svgName': 'image', 'hasFill': true }
export default iconFn
