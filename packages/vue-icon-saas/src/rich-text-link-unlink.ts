import { svg } from '@opentiny/vue-common'
import RichTextLinkUnlink from '@opentiny/vue-theme-saas/svgs/rich-text-link-unlink.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextLinkUnlink', component: RichTextLinkUnlink, filledComponent: RichTextLinkUnlink })()

iconFn.__flag = { 'svgName': 'rich-text-link-unlink', 'hasFill': false }
export default iconFn
