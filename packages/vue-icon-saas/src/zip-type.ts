import { svg } from '@opentiny/vue-common'
import ZipType from '@opentiny/vue-theme-saas/svgs/zip-type.svg'
import ZipTypeFilled from '@opentiny/vue-theme-saas/svgs/zip-type-filled.svg'

const iconFn = () => svg({ name: 'IconZipType', component: ZipType, filledComponent: ZipTypeFilled })()
iconFn.__flag = { 'svgName': 'zip-type', 'hasFill': true }
export default iconFn
