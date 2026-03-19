import { svg } from '@opentiny/vue-common'
import CustomsClearanceForm from '@opentiny/vue-theme-saas/svgs/customs-clearance-form.svg'
import CustomsClearanceFormFilled from '@opentiny/vue-theme-saas/svgs/customs-clearance-form-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconCustomsClearanceForm',
    component: CustomsClearanceForm,
    filledComponent: CustomsClearanceFormFilled
  })()
iconFn.__flag = { 'svgName': 'customs-clearance-form', 'hasFill': true }
export default iconFn
