import { svg } from '@opentiny/vue-common'
import RichTextH6 from '@opentiny/vue-theme-saas/svgs/rich-text-h-6.svg'

const iconFn = () => svg({ name: 'IconRichTextH6', component: RichTextH6, filledComponent: RichTextH6 })()

iconFn.__flag = { 'svgName': 'rich-text-h-6', 'hasFill': false }
export default iconFn
