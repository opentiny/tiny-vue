import { svg } from '@opentiny/vue-common'
import RichTextQuoteText from '@opentiny/vue-theme-saas/svgs/rich-text-quote-text.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextQuoteText', component: RichTextQuoteText, filledComponent: RichTextQuoteText })()

iconFn.__flag = { 'svgName': 'rich-text-quote-text', 'hasFill': false }
export default iconFn
