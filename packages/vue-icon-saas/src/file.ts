import { svg } from '@opentiny/vue-common'
import File from '@opentiny/vue-theme-saas/svgs/file.svg'
import FileFilled from '@opentiny/vue-theme-saas/svgs/file-filled.svg'

const iconFn = () => svg({ name: 'IconFile', component: File, filledComponent: FileFilled })()
iconFn.__flag = { 'svgName': 'file', 'hasFill': true }
export default iconFn
