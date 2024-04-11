import { log } from '@opentiny/vue-renderless/common'
import GlobalConfig from '../config'

const outLog = (type) => (message) => {
  let msg = `[tiny-grid] ${GlobalConfig.i18n(message) || message}`

  log(msg, type)

  return msg
}

export const warn = outLog('warn')

export const error = outLog('error')
