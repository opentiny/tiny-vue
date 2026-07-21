import { svg } from '@opentiny/vue-common'
import Team from '@opentiny/vue-theme-saas/svgs/team.svg'
import TeamFilled from '@opentiny/vue-theme-saas/svgs/team-filled.svg'

const iconFn = () => svg({ name: 'IconTeam', component: Team, filledComponent: TeamFilled })()
iconFn.__flag = { 'svgName': 'team', 'hasFill': true }
export default iconFn
