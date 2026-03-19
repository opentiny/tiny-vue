import { svg } from '@opentiny/vue-common'
import RichTextMergeCellsVertical from '@opentiny/vue-theme-saas/svgs/rich-text-merge-cells-vertical.svg'

const iconFn = () =>
  svg({
    name: 'IconRichTextMergeCellsVertical',
    component: RichTextMergeCellsVertical,
    filledComponent: RichTextMergeCellsVertical
  })()

iconFn.__flag = { 'svgName': 'rich-text-merge-cells-vertical', 'hasFill': false }
export default iconFn
