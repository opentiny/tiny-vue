import { svg } from '@opentiny/vue-common'
import TabletView from '@opentiny/vue-theme-saas/svgs/tablet-view.svg'

const iconFn = () => svg({ name: 'IconTabletView', component: TabletView, filledComponent: TabletView })()

iconFn.__flag = { 'svgName': 'tablet-view', 'hasFill': false }
export default iconFn
