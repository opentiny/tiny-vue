import { svg } from '@opentiny/vue-common'
import ListSheet from '@opentiny/vue-theme-saas/svgs/list-sheet.svg'
import ListSheetFilled from '@opentiny/vue-theme-saas/svgs/list-sheet-filled.svg'

const iconFn = () => svg({ name: 'IconListSheet', component: ListSheet, filledComponent: ListSheetFilled })()
iconFn.__flag = { 'svgName': 'list-sheet', 'hasFill': true }
export default iconFn
