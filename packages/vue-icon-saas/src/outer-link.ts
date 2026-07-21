import { svg } from '@opentiny/vue-common'
import OuterLink from '@opentiny/vue-theme-saas/svgs/outer-link.svg'
import OuterLinkFilled from '@opentiny/vue-theme-saas/svgs/outer-link-filled.svg'

const iconFn = () => svg({ name: 'IconOuterLink', component: OuterLink, filledComponent: OuterLinkFilled })()
iconFn.__flag = { 'svgName': 'outer-link', 'hasFill': true }
export default iconFn
