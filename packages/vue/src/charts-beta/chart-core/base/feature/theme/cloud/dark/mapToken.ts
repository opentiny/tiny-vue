import basicToken from './basicToken'
import getMapToken from '../getMapToken'

// 获取新的mapToken
const mapToken = {
  ...getMapToken(basicToken, false)
}

export default mapToken
