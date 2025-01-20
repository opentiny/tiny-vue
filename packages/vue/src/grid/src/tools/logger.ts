import { logger } from '@opentiny/utils'
import GlobalConfig from '../config'

const outLog = (type) => (message, detail) => {
  let msg = `[tiny-grid] ${GlobalConfig.i18n(message) || message}`

  if (detail) {
    msg += `: ${detail}`
  }

  logger[type](msg)

  return msg
}

export const warn = outLog('warn')

export const error = outLog('error')
