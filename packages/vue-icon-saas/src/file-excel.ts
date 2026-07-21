import { svg } from '@opentiny/vue-common'
import FileExcel from '@opentiny/vue-theme-saas/svgs/file-excel.svg'
import FileExcelFilled from '@opentiny/vue-theme-saas/svgs/file-excel-filled.svg'

const iconFn = () => svg({ name: 'IconFileExcel', component: FileExcel, filledComponent: FileExcelFilled })()
iconFn.__flag = { 'svgName': 'file-excel', 'hasFill': true }
export default iconFn
