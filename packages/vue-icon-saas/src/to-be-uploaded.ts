import { svg } from '@opentiny/vue-common'
import ToBeUploaded from '@opentiny/vue-theme-saas/svgs/to-be-uploaded.svg'
import ToBeUploadedFilled from '@opentiny/vue-theme-saas/svgs/to-be-uploaded-filled.svg'

const iconFn = () => svg({ name: 'IconToBeUploaded', component: ToBeUploaded, filledComponent: ToBeUploadedFilled })()
iconFn.__flag = { 'svgName': 'to-be-uploaded', 'hasFill': true }
export default iconFn
