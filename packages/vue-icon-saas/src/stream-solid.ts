import { svg } from '@opentiny/vue-common'
import StreamSolid from '@opentiny/vue-theme-saas/svgs/stream-solid.svg'

const iconFn = () => svg({ name: 'IconStreamSolid', component: StreamSolid, filledComponent: StreamSolid })()

iconFn.__flag = { 'svgName': 'stream-solid', 'hasFill': false }
export default iconFn
