import { svg } from '@opentiny/vue-common'
import PdfType from '@opentiny/vue-theme-saas/svgs/pdf-type.svg'
import PdfTypeFilled from '@opentiny/vue-theme-saas/svgs/pdf-type-filled.svg'

const iconFn = () => svg({ name: 'IconPdfType', component: PdfType, filledComponent: PdfTypeFilled })()
iconFn.__flag = { 'svgName': 'pdf-type', 'hasFill': true }
export default iconFn
