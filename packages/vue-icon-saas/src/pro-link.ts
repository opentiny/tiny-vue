import { svg } from '@opentiny/vue-common'
import ProLink from '@opentiny/vue-theme-saas/svgs/pro-link.svg'

const iconFn = () => svg({ name: 'IconProLink', component: ProLink, filledComponent: ProLink })()

iconFn.__flag = { 'svgName': 'pro-link', 'hasFill': false }
export default iconFn
