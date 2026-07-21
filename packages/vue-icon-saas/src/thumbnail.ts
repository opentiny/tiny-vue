import { svg } from '@opentiny/vue-common'
import Thumbnail from '@opentiny/vue-theme-saas/svgs/thumbnail.svg'
import ThumbnailFilled from '@opentiny/vue-theme-saas/svgs/thumbnail-filled.svg'

const iconFn = () => svg({ name: 'IconThumbnail', component: Thumbnail, filledComponent: ThumbnailFilled })()
iconFn.__flag = { 'svgName': 'thumbnail', 'hasFill': true }
export default iconFn
