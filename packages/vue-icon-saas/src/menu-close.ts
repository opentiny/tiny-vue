import { svg } from '@opentiny/vue-common'
import MenuClose from '@opentiny/vue-theme-saas/svgs/menu-close.svg'

const iconFn = () => svg({ name: 'IconMenuClose', component: MenuClose, filledComponent: MenuClose })()

iconFn.__flag = { 'svgName': 'menu-close', 'hasFill': false }
export default iconFn
