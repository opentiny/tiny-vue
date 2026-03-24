import { svg } from '@opentiny/vue-common'
import DesktopView from '@opentiny/vue-theme-saas/svgs/desktop-view.svg'

const iconFn = () => svg({ name: 'IconDesktopView', component: DesktopView, filledComponent: DesktopView })()

iconFn.__flag = { 'svgName': 'desktop-view', 'hasFill': false }
export default iconFn
