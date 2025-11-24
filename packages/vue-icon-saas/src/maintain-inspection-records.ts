import { svg } from '@opentiny/vue-common'
import MaintainInspectionRecords from '@opentiny/vue-theme-saas/svgs/maintain-inspection-records.svg'
import MaintainInspectionRecordsFilled from '@opentiny/vue-theme-saas/svgs/maintain-inspection-records-filled.svg'

export default () =>
  svg({
    name: 'IconMaintainInspectionRecords',
    component: MaintainInspectionRecords,
    filledComponent: MaintainInspectionRecordsFilled
  })()
