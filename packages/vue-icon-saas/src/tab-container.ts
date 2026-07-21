import { svg } from '@opentiny/vue-common'
import TabContainer from '@opentiny/vue-theme-saas/svgs/tab-container.svg'
import TabContainerFilled from '@opentiny/vue-theme-saas/svgs/tab-container-filled.svg'

const iconFn = () => svg({ name: 'IconTabContainer', component: TabContainer, filledComponent: TabContainerFilled })()
iconFn.__flag = { 'svgName': 'tab-container', 'hasFill': true }
export default iconFn
