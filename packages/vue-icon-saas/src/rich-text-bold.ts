import { svg } from '@opentiny/vue-common'
import RichTextBold from '@opentiny/vue-theme-saas/svgs/rich-text-bold.svg'

const iconFn = () => svg({ name: 'IconRichTextBold', component: RichTextBold, filledComponent: RichTextBold })()

iconFn.__flag = { 'svgName': 'rich-text-bold', 'hasFill': false }
export default iconFn
