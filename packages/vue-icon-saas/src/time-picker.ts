import { svg } from '@opentiny/vue-common'
import TimePicker from '@opentiny/vue-theme-saas/svgs/time-picker.svg'
import TimePickerFilled from '@opentiny/vue-theme-saas/svgs/time-picker-filled.svg'

const iconFn = () => svg({ name: 'IconTimePicker', component: TimePicker, filledComponent: TimePickerFilled })()
iconFn.__flag = { 'svgName': 'time-picker', 'hasFill': true }
export default iconFn
