import { svg } from '@opentiny/vue-common'
import RichTextH4 from '@opentiny/vue-theme-saas/svgs/rich-text-h-4.svg'

const iconFn = () => svg({ name: 'IconRichTextH4', component: RichTextH4, filledComponent: RichTextH4 })()

iconFn.__flag = { 'svgName': 'rich-text-h-4', 'hasFill': false }
export default iconFn
