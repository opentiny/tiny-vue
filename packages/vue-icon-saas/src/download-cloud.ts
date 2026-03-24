import { svg } from '@opentiny/vue-common'
import DownloadCloud from '@opentiny/vue-theme-saas/svgs/download-cloud.svg'
import DownloadCloudFilled from '@opentiny/vue-theme-saas/svgs/download-cloud-filled.svg'

const iconFn = () =>
  svg({ name: 'IconDownloadCloud', component: DownloadCloud, filledComponent: DownloadCloudFilled })()
iconFn.__flag = { 'svgName': 'download-cloud', 'hasFill': true }
export default iconFn
