import { svg } from '@opentiny/vue-common'
import RichTextStrikethrough from '@opentiny/vue-theme-saas/svgs/rich-text-strikethrough.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextStrikethrough', component: RichTextStrikethrough, filledComponent: RichTextStrikethrough })()

iconFn.__flag = { 'svgName': 'rich-text-strikethrough', 'hasFill': false }
export default iconFn
