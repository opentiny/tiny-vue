import { svg } from '@opentiny/vue-common'
import Link from '@opentiny/vue-theme-saas/svgs/link.svg'
import LinkFilled from '@opentiny/vue-theme-saas/svgs/link-filled.svg'

const iconFn = () => svg({ name: 'IconLink', component: Link, filledComponent: LinkFilled })()
iconFn.__flag = { 'svgName': 'link', 'hasFill': true }
export default iconFn
