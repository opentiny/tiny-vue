import { svg } from '@opentiny/vue-common'
import FileType from '@opentiny/vue-theme-saas/svgs/file-type.svg'
import FileTypeFilled from '@opentiny/vue-theme-saas/svgs/file-type-filled.svg'

const iconFn = () => svg({ name: 'IconFileType', component: FileType, filledComponent: FileTypeFilled })()
iconFn.__flag = { 'svgName': 'file-type', 'hasFill': true }
export default iconFn
