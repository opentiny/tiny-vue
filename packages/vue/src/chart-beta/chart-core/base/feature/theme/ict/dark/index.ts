import basicToken from './basicToken'
import modelToken from './modelToken'
import chartsToken from './chartsToken'
import { colorState, colorGroup } from '../../color/ict/dark'

const ictDark = {
  colorGroup,
  colorState,
  ...modelToken,
  ...chartsToken
}

export default ictDark
export { basicToken as ictDarkBasicToken }
