import { svg } from '@opentiny/vue-common'
import ProCompany from '@opentiny/vue-theme-saas/svgs/pro-company.svg'

const iconFn = () => svg({ name: 'IconProCompany', component: ProCompany, filledComponent: ProCompany })()

iconFn.__flag = { 'svgName': 'pro-company', 'hasFill': false }
export default iconFn
