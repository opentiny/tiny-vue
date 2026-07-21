import { svg } from '@opentiny/vue-common'
import Home from '@opentiny/vue-theme-saas/svgs/home.svg'

const iconFn = () => svg({ name: 'IconHome', component: Home, filledComponent: Home })()

iconFn.__flag = { 'svgName': 'home', 'hasFill': false }
export default iconFn
