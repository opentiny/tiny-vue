import { svg } from '@opentiny/vue-common'
import AddPicture from '@opentiny/vue-theme-saas/svgs/add-picture.svg'

const iconFn = () => svg({ name: 'IconAddPicture', component: AddPicture, filledComponent: AddPicture })()

iconFn.__flag = { 'svgName': 'add-picture', 'hasFill': false }
export default iconFn
