import { svg } from '@opentiny/vue-common'
import Pdf from '@opentiny/vue-theme-saas/svgs/pdf.svg'

const iconFn = () => svg({ name: 'IconPdf', component: Pdf, filledComponent: Pdf })()

iconFn.__flag = { 'svgName': 'pdf', 'hasFill': false }
export default iconFn
