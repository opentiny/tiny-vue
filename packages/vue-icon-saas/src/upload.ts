import { svg } from '@opentiny/vue-common'
import Upload from '@opentiny/vue-theme-saas/svgs/upload.svg'
import UploadFilled from '@opentiny/vue-theme-saas/svgs/upload-filled.svg'

const iconFn = () => svg({ name: 'IconUpload', component: Upload, filledComponent: UploadFilled })()
iconFn.__flag = { 'svgName': 'upload', 'hasFill': true }
export default iconFn
