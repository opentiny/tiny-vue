import { svg } from '@opentiny/vue-common'
import Record from '@opentiny/vue-theme-saas/svgs/record.svg'
import RecordFilled from '@opentiny/vue-theme-saas/svgs/record-filled.svg'

const iconFn = () => svg({ name: 'IconRecord', component: Record, filledComponent: RecordFilled })()
iconFn.__flag = { 'svgName': 'record', 'hasFill': true }
export default iconFn
