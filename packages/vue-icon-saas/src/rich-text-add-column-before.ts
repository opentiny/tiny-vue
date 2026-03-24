import { svg } from '@opentiny/vue-common'
import RichTextAddColumnBefore from '@opentiny/vue-theme-saas/svgs/rich-text-add-column-before.svg'

const iconFn = () =>
  svg({
    name: 'IconRichTextAddColumnBefore',
    component: RichTextAddColumnBefore,
    filledComponent: RichTextAddColumnBefore
  })()

iconFn.__flag = { 'svgName': 'rich-text-add-column-before', 'hasFill': false }
export default iconFn
