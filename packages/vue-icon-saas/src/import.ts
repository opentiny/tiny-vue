import { svg } from '@opentiny/vue-common'
import Import from '@opentiny/vue-theme-saas/svgs/import.svg'
import ImportFilled from '@opentiny/vue-theme-saas/svgs/import-filled.svg'

const iconFn = () => svg({ name: 'IconImport', component: Import, filledComponent: ImportFilled })()
iconFn.__flag = { 'svgName': 'import', 'hasFill': true }
export default iconFn
