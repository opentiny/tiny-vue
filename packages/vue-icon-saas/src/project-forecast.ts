import { svg } from '@opentiny/vue-common'
import ProjectForecast from '@opentiny/vue-theme-saas/svgs/project-forecast.svg'
import ProjectForecastFilled from '@opentiny/vue-theme-saas/svgs/project-forecast-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectForecast', component: ProjectForecast, filledComponent: ProjectForecastFilled })()
iconFn.__flag = { 'svgName': 'project-forecast', 'hasFill': true }
export default iconFn
