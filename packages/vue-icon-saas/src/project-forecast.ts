import { svg } from '@opentiny/vue-common'
import ProjectForecast from '@opentiny/vue-theme-saas/svgs/project-forecast.svg'
import ProjectForecastFilled from '@opentiny/vue-theme-saas/svgs/project-forecast-filled.svg'

export default () =>
  svg({ name: 'IconProjectForecast', component: ProjectForecast, filledComponent: ProjectForecastFilled })()
