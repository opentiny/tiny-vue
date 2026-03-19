import { svg } from '@opentiny/vue-common'
import RichTextListUnordered from '@opentiny/vue-theme-saas/svgs/rich-text-list-unordered.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextListUnordered', component: RichTextListUnordered, filledComponent: RichTextListUnordered })()

iconFn.__flag = { 'svgName': 'rich-text-list-unordered', 'hasFill': false }
export default iconFn
