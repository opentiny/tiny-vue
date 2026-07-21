import { svg } from '@opentiny/vue-common'
import Tag from '@opentiny/vue-theme-saas/svgs/tag.svg'
import TagFilled from '@opentiny/vue-theme-saas/svgs/tag-filled.svg'

const iconFn = () => svg({ name: 'IconTag', component: Tag, filledComponent: TagFilled })()
iconFn.__flag = { 'svgName': 'tag', 'hasFill': true }
export default iconFn
