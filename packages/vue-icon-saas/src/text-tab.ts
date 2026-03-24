import { svg } from '@opentiny/vue-common'
import TextTab from '@opentiny/vue-theme-saas/svgs/text-tab.svg'
import TextTabFilled from '@opentiny/vue-theme-saas/svgs/text-tab-filled.svg'

const iconFn = () => svg({ name: 'IconTextTab', component: TextTab, filledComponent: TextTabFilled })()
iconFn.__flag = { 'svgName': 'text-tab', 'hasFill': true }
export default iconFn
