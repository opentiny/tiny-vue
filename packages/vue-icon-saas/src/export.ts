import { svg } from '@opentiny/vue-common'
import Export from '@opentiny/vue-theme-saas/svgs/export.svg'
import ExportFilled from '@opentiny/vue-theme-saas/svgs/export-filled.svg'

const iconFn = () => svg({ name: 'IconExport', component: Export, filledComponent: ExportFilled })()
iconFn.__flag = { 'svgName': 'export', 'hasFill': true }
export default iconFn
