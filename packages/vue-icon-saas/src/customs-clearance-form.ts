import { svg } from '@opentiny/vue-common'
import CustomsClearanceForm from '@opentiny/vue-theme-saas/svgs/customs-clearance-form.svg'
import CustomsClearanceFormFilled from '@opentiny/vue-theme-saas/svgs/customs-clearance-form-filled.svg'

export default () =>
  svg({
    name: 'IconCustomsClearanceForm',
    component: CustomsClearanceForm,
    filledComponent: CustomsClearanceFormFilled
  })()
