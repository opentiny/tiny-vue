import { svg } from '@opentiny/vue-common'
import MaintainInspectionRecords from '@opentiny/vue-theme-saas/svgs/maintain-inspection-records.svg'
import MaintainInspectionRecordsFilled from '@opentiny/vue-theme-saas/svgs/maintain-inspection-records-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconMaintainInspectionRecords',
    component: MaintainInspectionRecords,
    filledComponent: MaintainInspectionRecordsFilled
  })()
iconFn.__flag = { 'svgName': 'maintain-inspection-records', 'hasFill': true }
export default iconFn
