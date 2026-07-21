import { svg } from '@opentiny/vue-common'
import RichTextH1 from '@opentiny/vue-theme-saas/svgs/rich-text-h-1.svg'

const iconFn = () => svg({ name: 'IconRichTextH1', component: RichTextH1, filledComponent: RichTextH1 })()

iconFn.__flag = { 'svgName': 'rich-text-h-1', 'hasFill': false }
export default iconFn
