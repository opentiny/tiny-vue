import { svg } from '@opentiny/vue-common'
import CloudDownload from '@opentiny/vue-theme-saas/svgs/cloud-download.svg'
import CloudDownloadFilled from '@opentiny/vue-theme-saas/svgs/cloud-download-filled.svg'

export default () =>
  svg({ name: 'IconCloudDownload', component: CloudDownload, filledComponent: CloudDownloadFilled })()
