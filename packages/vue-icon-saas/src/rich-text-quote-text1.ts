import { svg } from '@opentiny/vue-common'
import RichTextQuoteText1 from '@opentiny/vue-theme-saas/svgs/rich-text-quote-text1.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextQuoteText1', component: RichTextQuoteText1, filledComponent: RichTextQuoteText1 })()

iconFn.__flag = { 'svgName': 'rich-text-quote-text1', 'hasFill': false }
export default iconFn
