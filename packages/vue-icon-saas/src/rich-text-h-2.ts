import { svg } from '@opentiny/vue-common'
import RichTextH2 from '@opentiny/vue-theme-saas/svgs/rich-text-h-2.svg'

const iconFn = () => svg({ name: 'IconRichTextH2', component: RichTextH2, filledComponent: RichTextH2 })()

iconFn.__flag = { 'svgName': 'rich-text-h-2', 'hasFill': false }
export default iconFn
