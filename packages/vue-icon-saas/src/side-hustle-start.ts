import { svg } from '@opentiny/vue-common'
import SideHustleStart from '@opentiny/vue-theme-saas/svgs/side-hustle-start.svg'
import SideHustleStartFilled from '@opentiny/vue-theme-saas/svgs/side-hustle-start-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSideHustleStart', component: SideHustleStart, filledComponent: SideHustleStartFilled })()
iconFn.__flag = { 'svgName': 'side-hustle-start', 'hasFill': true }
export default iconFn
