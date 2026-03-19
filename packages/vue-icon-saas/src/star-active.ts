import { svg } from '@opentiny/vue-common'
import StarActive from '@opentiny/vue-theme-saas/svgs/star-active.svg'

const iconFn = () => svg({ name: 'IconStarActive', component: StarActive, filledComponent: StarActive })()

iconFn.__flag = { 'svgName': 'star-active', 'hasFill': false }
export default iconFn
