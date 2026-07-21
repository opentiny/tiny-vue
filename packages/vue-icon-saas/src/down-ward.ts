import { svg } from '@opentiny/vue-common'
import DownWard from '@opentiny/vue-theme-saas/svgs/down-ward.svg'

const iconFn = () => svg({ name: 'IconDownWard', component: DownWard, filledComponent: DownWard })()

iconFn.__flag = { 'svgName': 'down-ward', 'hasFill': false }
export default iconFn
