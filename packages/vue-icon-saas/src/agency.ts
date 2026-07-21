import { svg } from '@opentiny/vue-common'
import Agency from '@opentiny/vue-theme-saas/svgs/agency.svg'

const iconFn = () => svg({ name: 'IconAgency', component: Agency, filledComponent: Agency })()

iconFn.__flag = { 'svgName': 'agency', 'hasFill': false }
export default iconFn
