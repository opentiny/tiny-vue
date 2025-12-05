import { svg } from '@opentiny/vue-common'
import TalentPoolList from '@opentiny/vue-theme-saas/svgs/talent-pool-list.svg'
import TalentPoolListFilled from '@opentiny/vue-theme-saas/svgs/talent-pool-list-filled.svg'

export default () =>
  svg({ name: 'IconTalentPoolList', component: TalentPoolList, filledComponent: TalentPoolListFilled })()
