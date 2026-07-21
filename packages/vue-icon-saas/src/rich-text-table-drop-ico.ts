import { svg } from '@opentiny/vue-common'
import RichTextTableDropIco from '@opentiny/vue-theme-saas/svgs/rich-text-table-drop-ico.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextTableDropIco', component: RichTextTableDropIco, filledComponent: RichTextTableDropIco })()

iconFn.__flag = { 'svgName': 'rich-text-table-drop-ico', 'hasFill': false }
export default iconFn
