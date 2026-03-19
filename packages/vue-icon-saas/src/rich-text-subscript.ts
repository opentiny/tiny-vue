import { svg } from '@opentiny/vue-common'
import RichTextSubscript from '@opentiny/vue-theme-saas/svgs/rich-text-subscript.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextSubscript', component: RichTextSubscript, filledComponent: RichTextSubscript })()

iconFn.__flag = { 'svgName': 'rich-text-subscript', 'hasFill': false }
export default iconFn
