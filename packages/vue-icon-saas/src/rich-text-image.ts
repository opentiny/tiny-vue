import { svg } from '@opentiny/vue-common'
import RichTextImage from '@opentiny/vue-theme-saas/svgs/rich-text-image.svg'

const iconFn = () => svg({ name: 'IconRichTextImage', component: RichTextImage, filledComponent: RichTextImage })()

iconFn.__flag = { 'svgName': 'rich-text-image', 'hasFill': false }
export default iconFn
