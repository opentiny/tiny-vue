import { svg } from '@opentiny/vue-common'
import RichTextH5 from '@opentiny/vue-theme-saas/svgs/rich-text-h-5.svg'

const iconFn = () => svg({ name: 'IconRichTextH5', component: RichTextH5, filledComponent: RichTextH5 })()

iconFn.__flag = { 'svgName': 'rich-text-h-5', 'hasFill': false }
export default iconFn
