import { svg } from '@opentiny/vue-common'
import ImageError from '@opentiny/vue-theme-saas/svgs/image-error.svg'

const iconFn = () => svg({ name: 'IconImageError', component: ImageError, filledComponent: ImageError })()

iconFn.__flag = { 'svgName': 'image-error', 'hasFill': false }
export default iconFn
