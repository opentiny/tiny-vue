import { getWindow } from '../window'

const _win: any = getWindow()
/** 使用 log.logger.xxx 代替 window.console.xxx, 避免语法警告 */
export const log = { logger: _win.console as Console }

export default log
