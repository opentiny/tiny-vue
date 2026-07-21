import { svg } from '@opentiny/vue-common'
import RichTextAddRowBefore from '@opentiny/vue-theme-saas/svgs/rich-text-add-row-before.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextAddRowBefore', component: RichTextAddRowBefore, filledComponent: RichTextAddRowBefore })()

iconFn.__flag = { 'svgName': 'rich-text-add-row-before', 'hasFill': false }
export default iconFn
