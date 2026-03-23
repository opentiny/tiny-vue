import { svg } from '@opentiny/vue-common'
import Nodejs from '@opentiny/vue-theme-saas/svgs/nodejs.svg'

const iconFn = () => svg({ name: 'IconNodejs', component: Nodejs, filledComponent: Nodejs })()

iconFn.__flag = { 'svgName': 'nodejs', 'hasFill': false }
export default iconFn
