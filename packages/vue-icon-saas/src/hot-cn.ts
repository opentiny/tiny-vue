import { svg } from '@opentiny/vue-common'
import HotCn from '@opentiny/vue-theme-saas/svgs/hot-cn.svg'
import HotCnFilled from '@opentiny/vue-theme-saas/svgs/hot-cn-filled.svg'

const iconFn = () => svg({ name: 'IconHotCn', component: HotCn, filledComponent: HotCnFilled })()
iconFn.__flag = { 'svgName': 'hot-cn', 'hasFill': true }
export default iconFn
