import { svg } from '@opentiny/vue-common'
import DownloadLink from '@opentiny/vue-theme-saas/svgs/download-link.svg'

const iconFn = () => svg({ name: 'IconDownloadLink', component: DownloadLink, filledComponent: DownloadLink })()

iconFn.__flag = { 'svgName': 'download-link', 'hasFill': false }
export default iconFn
