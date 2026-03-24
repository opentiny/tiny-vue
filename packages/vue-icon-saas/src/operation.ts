import { svg } from '@opentiny/vue-common'
import Operation from '@opentiny/vue-theme-saas/svgs/operation.svg'

const iconFn = () => svg({ name: 'IconOperation', component: Operation, filledComponent: Operation })()

iconFn.__flag = { 'svgName': 'operation', 'hasFill': false }
export default iconFn
