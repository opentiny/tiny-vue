import { svg } from '@opentiny/vue-common'
import VideoType from '@opentiny/vue-theme-saas/svgs/video-type.svg'
import VideoTypeFilled from '@opentiny/vue-theme-saas/svgs/video-type-filled.svg'

const iconFn = () => svg({ name: 'IconVideoType', component: VideoType, filledComponent: VideoTypeFilled })()
iconFn.__flag = { 'svgName': 'video-type', 'hasFill': true }
export default iconFn
