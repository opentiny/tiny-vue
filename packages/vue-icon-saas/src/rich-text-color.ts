import { svg } from '@opentiny/vue-common'
import RichTextColor from '@opentiny/vue-theme-saas/svgs/rich-text-color.svg'

const iconFn = () => svg({ name: 'IconRichTextColor', component: RichTextColor, filledComponent: RichTextColor })()

iconFn.__flag = { 'svgName': 'rich-text-color', 'hasFill': false }
export default iconFn
