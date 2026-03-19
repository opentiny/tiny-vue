import { svg } from '@opentiny/vue-common'
import Tabs from '@opentiny/vue-theme-saas/svgs/tabs.svg'
import TabsFilled from '@opentiny/vue-theme-saas/svgs/tabs-filled.svg'

const iconFn = () => svg({ name: 'IconTabs', component: Tabs, filledComponent: TabsFilled })()
iconFn.__flag = { 'svgName': 'tabs', 'hasFill': true }
export default iconFn
