import { svg } from '@opentiny/vue-common'
import RichTextListOrdered from '@opentiny/vue-theme-saas/svgs/rich-text-list-ordered.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextListOrdered', component: RichTextListOrdered, filledComponent: RichTextListOrdered })()

iconFn.__flag = { 'svgName': 'rich-text-list-ordered', 'hasFill': false }
export default iconFn
