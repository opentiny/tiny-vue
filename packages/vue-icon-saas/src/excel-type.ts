import { svg } from '@opentiny/vue-common'
import ExcelType from '@opentiny/vue-theme-saas/svgs/excel-type.svg'
import ExcelTypeFilled from '@opentiny/vue-theme-saas/svgs/excel-type-filled.svg'

const iconFn = () => svg({ name: 'IconExcelType', component: ExcelType, filledComponent: ExcelTypeFilled })()
iconFn.__flag = { 'svgName': 'excel-type', 'hasFill': true }
export default iconFn
