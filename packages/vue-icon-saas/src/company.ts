import { svg } from '@opentiny/vue-common'
import Company from '@opentiny/vue-theme-saas/svgs/company.svg'
import CompanyFilled from '@opentiny/vue-theme-saas/svgs/company-filled.svg'

const iconFn = () => svg({ name: 'IconCompany', component: Company, filledComponent: CompanyFilled })()
iconFn.__flag = { 'svgName': 'company', 'hasFill': true }
export default iconFn
