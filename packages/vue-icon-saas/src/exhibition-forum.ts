import { svg } from '@opentiny/vue-common'
import ExhibitionForum from '@opentiny/vue-theme-saas/svgs/exhibition-forum.svg'
import ExhibitionForumFilled from '@opentiny/vue-theme-saas/svgs/exhibition-forum-filled.svg'

const iconFn = () =>
  svg({ name: 'IconExhibitionForum', component: ExhibitionForum, filledComponent: ExhibitionForumFilled })()
iconFn.__flag = { 'svgName': 'exhibition-forum', 'hasFill': true }
export default iconFn
