import { svg } from '@opentiny/vue-common'
import Excel from '@opentiny/vue-theme-saas/svgs/excel.svg'

const iconFn = () => svg({ name: 'IconExcel', component: Excel, filledComponent: Excel })()

iconFn.__flag = { 'svgName': 'excel', 'hasFill': false }
export default iconFn
