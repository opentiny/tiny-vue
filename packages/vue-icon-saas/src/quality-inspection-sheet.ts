import { svg } from '@opentiny/vue-common'
import QualityInspectionSheet from '@opentiny/vue-theme-saas/svgs/quality-inspection-sheet.svg'
import QualityInspectionSheetFilled from '@opentiny/vue-theme-saas/svgs/quality-inspection-sheet-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconQualityInspectionSheet',
    component: QualityInspectionSheet,
    filledComponent: QualityInspectionSheetFilled
  })()
iconFn.__flag = { 'svgName': 'quality-inspection-sheet', 'hasFill': true }
export default iconFn
