import { svg } from '@opentiny/vue-common'
import Document from '@opentiny/vue-theme-saas/svgs/document.svg'

const iconFn = () => svg({ name: 'IconDocument', component: Document, filledComponent: Document })()

iconFn.__flag = { 'svgName': 'document', 'hasFill': false }
export default iconFn
