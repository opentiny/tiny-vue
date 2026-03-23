import { svg } from '@opentiny/vue-common'
import FileCloudupload from '@opentiny/vue-theme-saas/svgs/file-cloudupload.svg'
import FileClouduploadFilled from '@opentiny/vue-theme-saas/svgs/file-cloudupload-filled.svg'

const iconFn = () =>
  svg({ name: 'IconFileCloudupload', component: FileCloudupload, filledComponent: FileClouduploadFilled })()
iconFn.__flag = { 'svgName': 'file-cloudupload', 'hasFill': true }
export default iconFn
