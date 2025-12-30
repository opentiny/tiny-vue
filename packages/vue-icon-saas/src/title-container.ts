import { svg } from '@opentiny/vue-common'
import TitleContainer from '@opentiny/vue-theme-saas/svgs/title-container.svg'
import TitleContainerFilled from '@opentiny/vue-theme-saas/svgs/title-container-filled.svg'

export default () =>
  svg({ name: 'IconTitleContainer', component: TitleContainer, filledComponent: TitleContainerFilled })()
