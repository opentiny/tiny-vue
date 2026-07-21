import { svg } from '@opentiny/vue-common'
import HistoryRecord from '@opentiny/vue-theme-saas/svgs/history-record.svg'

const iconFn = () => svg({ name: 'IconHistoryRecord', component: HistoryRecord, filledComponent: HistoryRecord })()

iconFn.__flag = { 'svgName': 'history-record', 'hasFill': false }
export default iconFn
