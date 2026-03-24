import { svg } from '@opentiny/vue-common'
import IndicatorArtifactConfiguration from '@opentiny/vue-theme-saas/svgs/indicator-artifact-configuration.svg'
import IndicatorArtifactConfigurationFilled from '@opentiny/vue-theme-saas/svgs/indicator-artifact-configuration-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconIndicatorArtifactConfiguration',
    component: IndicatorArtifactConfiguration,
    filledComponent: IndicatorArtifactConfigurationFilled
  })()
iconFn.__flag = { 'svgName': 'indicator-artifact-configuration', 'hasFill': true }
export default iconFn
