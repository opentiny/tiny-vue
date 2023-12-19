import basicToken from './basicToken'
import modelToken from './modelToken'
import chartsToken from './chartsToken'
import { colorState, colorGroup } from '../../color/cloud/dark'

// import { getMapToken } from './mapToken';

const cloudDark = {
  colorGroup,
  colorState,
  ...modelToken,
  ...chartsToken
}

export default cloudDark
export {
  basicToken as cloudDarkBasicToken
  // getMapToken as getCloudDarkMapToken
}
