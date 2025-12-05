import { svg } from '@opentiny/vue-common'
import IndicatorArtifactConfiguration from '@opentiny/vue-theme-saas/svgs/indicator-artifact-configuration.svg'
import IndicatorArtifactConfigurationFilled from '@opentiny/vue-theme-saas/svgs/indicator-artifact-configuration-filled.svg'

export default () =>
  svg({
    name: 'IconIndicatorArtifactConfiguration',
    component: IndicatorArtifactConfiguration,
    filledComponent: IndicatorArtifactConfigurationFilled
  })()
