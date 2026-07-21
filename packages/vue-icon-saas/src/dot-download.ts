import { svg } from '@opentiny/vue-common'
import DotDownload from '@opentiny/vue-theme-saas/svgs/dot-download.svg'

const iconFn = () => svg({ name: 'IconDotDownload', component: DotDownload, filledComponent: DotDownload })()

iconFn.__flag = { 'svgName': 'dot-download', 'hasFill': false }
export default iconFn
