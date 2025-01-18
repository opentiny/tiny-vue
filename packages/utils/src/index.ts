import * as _nanoid from './nanoid/index'
import _xss from './xss/index'
import * as _type from './type/index'
import * as _global from './global/index'
import * as _logger from './logger/index'
import * as _crypt from './crypt/index'

type NanoidType = typeof _nanoid
type XssType = typeof _xss
type Type = typeof _type
type GlobalType = typeof _global
type LoggerType = typeof _logger
type CryptType = typeof _crypt

interface Default {
  nanoid: NanoidType
  xss: XssType
  type: Type
  global: GlobalType
  log: LoggerType
  crypt: CryptType
}

const def: Default = {
  nanoid: _nanoid,
  xss: _xss,
  type: _type,
  global: _global,
  log: _logger,
  crypt: _crypt
}

export const nanoid: NanoidType = _nanoid
export const xss: XssType = _xss
export const type: Type = _type
export const global: GlobalType = _global
export const log: LoggerType = _logger
export const crypt: CryptType = _crypt

export default def
