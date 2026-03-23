import { svg } from '@opentiny/vue-common'
import Teams from '@opentiny/vue-theme-saas/svgs/teams.svg'

const iconFn = () => svg({ name: 'IconTeams', component: Teams, filledComponent: Teams })()

iconFn.__flag = { 'svgName': 'teams', 'hasFill': false }
export default iconFn
