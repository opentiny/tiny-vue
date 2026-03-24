import { svg } from '@opentiny/vue-common'
import UpWard from '@opentiny/vue-theme-saas/svgs/up-ward.svg'

const iconFn = () => svg({ name: 'IconUpWard', component: UpWard, filledComponent: UpWard })()

iconFn.__flag = { 'svgName': 'up-ward', 'hasFill': false }
export default iconFn
