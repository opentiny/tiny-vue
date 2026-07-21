import { svg } from '@opentiny/vue-common'
import MiscellaneousList from '@opentiny/vue-theme-saas/svgs/miscellaneous-list.svg'
import MiscellaneousListFilled from '@opentiny/vue-theme-saas/svgs/miscellaneous-list-filled.svg'

const iconFn = () =>
  svg({ name: 'IconMiscellaneousList', component: MiscellaneousList, filledComponent: MiscellaneousListFilled })()
iconFn.__flag = { 'svgName': 'miscellaneous-list', 'hasFill': true }
export default iconFn
