import { logger } from '@opentiny/utils'
import GlobalConfig from '../config'

const outLog =
  (type: string) =>
  (message: string, detail?: string): string => {
    let msg = `[tiny-grid] ${GlobalConfig.i18n(message) || message}`

    if (detail) {
      msg += `: ${detail}`
    }

    logger[type](msg)

    return msg
  }

export const warn = outLog('warn')

export const error = outLog('error')
