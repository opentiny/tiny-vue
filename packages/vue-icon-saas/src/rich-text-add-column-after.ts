import { svg } from '@opentiny/vue-common'
import RichTextAddColumnAfter from '@opentiny/vue-theme-saas/svgs/rich-text-add-column-after.svg'

const iconFn = () =>
  svg({
    name: 'IconRichTextAddColumnAfter',
    component: RichTextAddColumnAfter,
    filledComponent: RichTextAddColumnAfter
  })()

iconFn.__flag = { 'svgName': 'rich-text-add-column-after', 'hasFill': false }
export default iconFn
