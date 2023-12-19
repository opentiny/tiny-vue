import basicToken from './basicToken'
import getMapToken from '../getMapToken'

const mapToken = {
  ...getMapToken(basicToken, false)
}

export default mapToken
