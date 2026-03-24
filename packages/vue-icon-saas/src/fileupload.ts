import { svg } from '@opentiny/vue-common'
import Fileupload from '@opentiny/vue-theme-saas/svgs/fileupload.svg'
import FileuploadFilled from '@opentiny/vue-theme-saas/svgs/fileupload-filled.svg'

const iconFn = () => svg({ name: 'IconFileupload', component: Fileupload, filledComponent: FileuploadFilled })()
iconFn.__flag = { 'svgName': 'fileupload', 'hasFill': true }
export default iconFn
