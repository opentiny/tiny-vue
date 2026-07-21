import { svg } from '@opentiny/vue-common'
import RichTextHeading from '@opentiny/vue-theme-saas/svgs/rich-text-heading.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextHeading', component: RichTextHeading, filledComponent: RichTextHeading })()

iconFn.__flag = { 'svgName': 'rich-text-heading', 'hasFill': false }
export default iconFn
