import { svg } from '@opentiny/vue-common'
import Zip from '@opentiny/vue-theme-saas/svgs/zip.svg'

const iconFn = () => svg({ name: 'IconZip', component: Zip, filledComponent: Zip })()

iconFn.__flag = { 'svgName': 'zip', 'hasFill': false }
export default iconFn
