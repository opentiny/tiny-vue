import { svg } from '@opentiny/vue-common'
import RichTextMergeCells from '@opentiny/vue-theme-saas/svgs/rich-text-merge-cells.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextMergeCells', component: RichTextMergeCells, filledComponent: RichTextMergeCells })()

iconFn.__flag = { 'svgName': 'rich-text-merge-cells', 'hasFill': false }
export default iconFn
