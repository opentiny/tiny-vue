import { getWindow } from '../globalConfig'

const _win: any = getWindow()
/** 使用 logger.xxx 代替 window.console.xxx, 避免语法警告 */
export const logger = _win.console as Console

export default logger
