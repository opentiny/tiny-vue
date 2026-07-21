import { svg } from '@opentiny/vue-common'
import AddCircle from '@opentiny/vue-theme-saas/svgs/add-circle.svg'

const iconFn = () => svg({ name: 'IconAddCircle', component: AddCircle, filledComponent: AddCircle })()

iconFn.__flag = { 'svgName': 'add-circle', 'hasFill': false }
export default iconFn
