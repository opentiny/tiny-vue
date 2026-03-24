import { svg } from '@opentiny/vue-common'
import Avatar from '@opentiny/vue-theme-saas/svgs/avatar.svg'
import AvatarFilled from '@opentiny/vue-theme-saas/svgs/avatar-filled.svg'

const iconFn = () => svg({ name: 'IconAvatar', component: Avatar, filledComponent: AvatarFilled })()
iconFn.__flag = { 'svgName': 'avatar', 'hasFill': true }
export default iconFn
