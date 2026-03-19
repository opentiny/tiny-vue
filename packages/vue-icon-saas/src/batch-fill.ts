import { svg } from '@opentiny/vue-common'
import BatchFill from '@opentiny/vue-theme-saas/svgs/batch-fill.svg'
import BatchFillFilled from '@opentiny/vue-theme-saas/svgs/batch-fill-filled.svg'

const iconFn = () => svg({ name: 'IconBatchFill', component: BatchFill, filledComponent: BatchFillFilled })()
iconFn.__flag = { 'svgName': 'batch-fill', 'hasFill': true }
export default iconFn
