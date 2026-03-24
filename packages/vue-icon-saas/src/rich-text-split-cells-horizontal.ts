import { svg } from '@opentiny/vue-common'
import RichTextSplitCellsHorizontal from '@opentiny/vue-theme-saas/svgs/rich-text-split-cells-horizontal.svg'

const iconFn = () =>
  svg({
    name: 'IconRichTextSplitCellsHorizontal',
    component: RichTextSplitCellsHorizontal,
    filledComponent: RichTextSplitCellsHorizontal
  })()

iconFn.__flag = { 'svgName': 'rich-text-split-cells-horizontal', 'hasFill': false }
export default iconFn
