import { svg } from '@opentiny/vue-common'
import Form from '@opentiny/vue-theme-saas/svgs/form.svg'
import FormFilled from '@opentiny/vue-theme-saas/svgs/form-filled.svg'

const iconFn = () => svg({ name: 'IconForm', component: Form, filledComponent: FormFilled })()
iconFn.__flag = { 'svgName': 'form', 'hasFill': true }
export default iconFn
