import basicToken from './basicToken'
import modelToken from './modelToken'
import chartsToken from './chartsToken'
import { colorState, colorGroup } from '../../color/cloud/light'

const cloudLight = {
  colorGroup,
  colorState,
  ...modelToken,
  ...chartsToken
}

export default cloudLight
export { basicToken as cloudLightBasicToken }
