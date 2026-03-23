import { svg } from '@opentiny/vue-common'
import FilesCircle from '@opentiny/vue-theme-saas/svgs/files-circle.svg'
import FilesCircleFilled from '@opentiny/vue-theme-saas/svgs/files-circle-filled.svg'

const iconFn = () => svg({ name: 'IconFilesCircle', component: FilesCircle, filledComponent: FilesCircleFilled })()
iconFn.__flag = { 'svgName': 'files-circle', 'hasFill': true }
export default iconFn
