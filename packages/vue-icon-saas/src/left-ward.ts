import { svg } from '@opentiny/vue-common'
import LeftWard from '@opentiny/vue-theme-saas/svgs/left-ward.svg'

const iconFn = () => svg({ name: 'IconLeftWard', component: LeftWard, filledComponent: LeftWard })()

iconFn.__flag = { 'svgName': 'left-ward', 'hasFill': false }
export default iconFn
