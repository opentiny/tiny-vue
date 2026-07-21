import { svg } from '@opentiny/vue-common'
import Download from '@opentiny/vue-theme-saas/svgs/download.svg'
import DownloadFilled from '@opentiny/vue-theme-saas/svgs/download-filled.svg'

const iconFn = () => svg({ name: 'IconDownload', component: Download, filledComponent: DownloadFilled })()
iconFn.__flag = { 'svgName': 'download', 'hasFill': true }
export default iconFn
