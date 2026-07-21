import { svg } from '@opentiny/vue-common'
import AIFindRecords from '@opentiny/vue-theme-saas/svgs/a-i-find-records.svg'
import AIFindRecordsFilled from '@opentiny/vue-theme-saas/svgs/a-i-find-records-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAIFindRecords', component: AIFindRecords, filledComponent: AIFindRecordsFilled })()
iconFn.__flag = { 'svgName': 'a-i-find-records', 'hasFill': true }
export default iconFn
