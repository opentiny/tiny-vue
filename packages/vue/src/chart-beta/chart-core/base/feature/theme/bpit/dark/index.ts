import basicToken from './basicToken'
import modelToken from './modelToken'
import chartsToken from './chartsToken'
import { colorState, colorGroup } from '../../color/bpit/dark'

const bpitDark = {
  colorGroup,
  colorState,
  ...modelToken,
  ...chartsToken
}

export default bpitDark
export { basicToken as bpitDarkBasicToken }
