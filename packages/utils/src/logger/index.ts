import { getWindow } from '../window'

type _initPrint = (cls: any) => any
type _log = (cls: any, key: string) => () => void
type _switchLogger = (flag: boolean) => void
type _setLogger = (type: string, fn: any) => void

const _win: any = getWindow()
const _cnsl = 'console'
const _console = _win[_cnsl] || {}
let isOpen = true
const _print: any = {}

const log: _log = (csl, type) => {
  return function (...args) {
    if (!isOpen) return
    if (csl[type] && typeof csl[type] === 'function') {
      csl[type](...args)
    }
  }
}

const initPrint: _initPrint = (csl) => {
  Object.keys(csl).forEach((type) => {
    _print[type] = log(csl, type)
  })
  return _print
}

export const switchLogger: _switchLogger = (flag) => {
  isOpen = !!flag
}

export const setLogger: _setLogger = (type, fn) => {
  if (_print && Object.hasOwnProperty.call(_print, type)) {
    _print[type] = fn
  }
}

export const logger = initPrint(_console)

export default logger
