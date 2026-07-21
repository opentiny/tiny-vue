import { svg } from '@opentiny/vue-common'
import ProPic from '@opentiny/vue-theme-saas/svgs/pro-pic.svg'

const iconFn = () => svg({ name: 'IconProPic', component: ProPic, filledComponent: ProPic })()

iconFn.__flag = { 'svgName': 'pro-pic', 'hasFill': false }
export default iconFn
