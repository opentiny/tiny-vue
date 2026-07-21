import { svg } from '@opentiny/vue-common'
import RichTextH3 from '@opentiny/vue-theme-saas/svgs/rich-text-h-3.svg'

const iconFn = () => svg({ name: 'IconRichTextH3', component: RichTextH3, filledComponent: RichTextH3 })()

iconFn.__flag = { 'svgName': 'rich-text-h-3', 'hasFill': false }
export default iconFn
