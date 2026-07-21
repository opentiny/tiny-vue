import { svg } from '@opentiny/vue-common'
import RichTextAlignCenter from '@opentiny/vue-theme-saas/svgs/rich-text-align-center.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextAlignCenter', component: RichTextAlignCenter, filledComponent: RichTextAlignCenter })()

iconFn.__flag = { 'svgName': 'rich-text-align-center', 'hasFill': false }
export default iconFn
