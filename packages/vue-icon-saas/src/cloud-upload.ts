import { svg } from '@opentiny/vue-common'
import CloudUpload from '@opentiny/vue-theme-saas/svgs/cloud-upload.svg'

const iconFn = () => svg({ name: 'IconCloudUpload', component: CloudUpload, filledComponent: CloudUpload })()

iconFn.__flag = { 'svgName': 'cloud-upload', 'hasFill': false }
export default iconFn
