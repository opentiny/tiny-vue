import { svg } from '@opentiny/vue-common'
import RichTextLink from '@opentiny/vue-theme-saas/svgs/rich-text-link.svg'

const iconFn = () => svg({ name: 'IconRichTextLink', component: RichTextLink, filledComponent: RichTextLink })()

iconFn.__flag = { 'svgName': 'rich-text-link', 'hasFill': false }
export default iconFn
