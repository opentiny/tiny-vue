import { svg } from '@opentiny/vue-common'
import FileuploadPro from '@opentiny/vue-theme-saas/svgs/fileupload-pro.svg'

const iconFn = () => svg({ name: 'IconFileuploadPro', component: FileuploadPro, filledComponent: FileuploadPro })()

iconFn.__flag = { 'svgName': 'fileupload-pro', 'hasFill': false }
export default iconFn
