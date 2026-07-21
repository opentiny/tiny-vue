import { svg } from '@opentiny/vue-common'
import RichTextSplitCellsVertical from '@opentiny/vue-theme-saas/svgs/rich-text-split-cells-vertical.svg'

const iconFn = () =>
  svg({
    name: 'IconRichTextSplitCellsVertical',
    component: RichTextSplitCellsVertical,
    filledComponent: RichTextSplitCellsVertical
  })()

iconFn.__flag = { 'svgName': 'rich-text-split-cells-vertical', 'hasFill': false }
export default iconFn
