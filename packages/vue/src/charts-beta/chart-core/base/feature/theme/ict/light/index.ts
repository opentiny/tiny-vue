import basicToken from './baiscToken'
import modelToken from './modelToken'
import chartsToken from './chartsToken'
import { colorState, colorGroup } from '../../color/ict/light'

const ictLight = {
  colorGroup,
  colorState,
  ...modelToken,
  ...chartsToken
}

export default ictLight
export { basicToken as ictLightBasicToken }
