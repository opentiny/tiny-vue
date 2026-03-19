import { svg } from '@opentiny/vue-common'
import TagGroup from '@opentiny/vue-theme-saas/svgs/tag-group.svg'
import TagGroupFilled from '@opentiny/vue-theme-saas/svgs/tag-group-filled.svg'

const iconFn = () => svg({ name: 'IconTagGroup', component: TagGroup, filledComponent: TagGroupFilled })()
iconFn.__flag = { 'svgName': 'tag-group', 'hasFill': true }
export default iconFn
