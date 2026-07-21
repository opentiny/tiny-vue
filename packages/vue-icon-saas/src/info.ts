import { svg } from '@opentiny/vue-common'
import Info from '@opentiny/vue-theme-saas/svgs/info.svg'

const iconFn = () => svg({ name: 'IconInfo', component: Info, filledComponent: Info })()

iconFn.__flag = { 'svgName': 'info', 'hasFill': false }
export default iconFn
