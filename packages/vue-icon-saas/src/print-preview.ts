import { svg } from '@opentiny/vue-common'
import PrintPreview from '@opentiny/vue-theme-saas/svgs/print-preview.svg'
import PrintPreviewFilled from '@opentiny/vue-theme-saas/svgs/print-preview-filled.svg'

const iconFn = () => svg({ name: 'IconPrintPreview', component: PrintPreview, filledComponent: PrintPreviewFilled })()
iconFn.__flag = { 'svgName': 'print-preview', 'hasFill': true }
export default iconFn
