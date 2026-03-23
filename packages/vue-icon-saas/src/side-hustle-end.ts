import { svg } from '@opentiny/vue-common'
import SideHustleEnd from '@opentiny/vue-theme-saas/svgs/side-hustle-end.svg'
import SideHustleEndFilled from '@opentiny/vue-theme-saas/svgs/side-hustle-end-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSideHustleEnd', component: SideHustleEnd, filledComponent: SideHustleEndFilled })()
iconFn.__flag = { 'svgName': 'side-hustle-end', 'hasFill': true }
export default iconFn
