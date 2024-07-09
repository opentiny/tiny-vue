import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const builtinDirective = ['v-if', 'v-for', 'v-model', 'v-slot', 'v-else', 'v-else-if']
export const builtinDirectivesWithoutVModel = builtinDirective.filter((x) => x !== 'v-model')

export const isNamedSlot = function (dObj) {
  return Object.keys(dObj.attribs).find(isSlotAttribute)
}

export function getSlotName(dObj) {
  if (!dObj.attribs) return 'default'
  const attr = Object.keys(dObj.attribs).find(isSlotAttribute)
  if (!isNamedSlot(dObj)) return 'default'
  const prefix = attr.startsWith('#') ? '#' : 'v-slot:'
  return attr.split(prefix)[1]
}

export function getSlotProps(dObj) {
  const attr = Object.keys(dObj.attribs).find(isSlotAttribute)
  return dObj.attribs[attr]
}

export const getCondition = function (dObj) {
  return dObj.attribs['v-if'] || dObj.attribs['v-else-if']
}

export function isConditional(dObj) {
  return isVIf(dObj) || isVElse(dObj) || isVElseIf(dObj)
}

export function isVIf(dObj) {
  return dObj.type !== 'text' && Object.prototype.hasOwnProperty.call(dObj.attribs, 'v-if')
}

export function isVElseIf(dObj) {
  return dObj.type !== 'text' && Object.prototype.hasOwnProperty.call(dObj.attribs, 'v-else-if')
}

export function isVElse(dObj) {
  return dObj.type !== 'text' && Object.prototype.hasOwnProperty.call(dObj.attribs, 'v-else')
}

export function isVifOrVElseIf(dObj) {
  return isVIf(dObj) || isVElseIf(dObj)
}

export const isVFor = function (dObj) {
  return dObj.attribs && Object.prototype.hasOwnProperty.call(dObj.attribs, 'v-for')
}

export const isSlotAttribute = function (attr) {
  return attr.startsWith('#') || attr.startsWith('v-slot')
}

export function isValueAttribute(attr) {
  return !['v-if', 'v-else', 'v-else-if', 'v-for', 'v-slot'].includes(attr)
}

export function isTextBlank(txt) {
  for (let i of txt) {
    if (i !== ' ' && i !== '\n') {
      return false
    }
  }
  return true
}

export function getTag(dObj) {
  return dObj.name
}

export function getFirstChild(dObj) {
  return dObj.children.length && dObj.children[0]
}

export function isEmptyObject(dObj) {
  return dObj.type === 'text' && isTextBlank(dObj.data)
}

export function isText(dObj) {
  return dObj.type === 'text'
}

export function isComponent(dObj) {
  return dObj.name === 'component'
}

export function isTransition(dObj) {
  return ['transition-group', 'transition'].includes(dObj.name)
}

export function getText(dObj) {
  return dObj.data
}

export function convertText(text) {
  return text.replace(/{{/g, '{').replace(/}}/g, '}').replace(/\$t/g, 't')
}

export function setDynamicComponent(dObj) {
  let component = dObj.attribs[':is']
  dObj.attribs[':component'] = `resolveComponent(${component}, useIcons)`
  delete dObj.attribs[':is']
  dObj.name = 'Dynamic'
}

export function isBindClass(attrName) {
  return attrName === ':class'
}

export function isBindAll(attrName) {
  return attrName === 'v-bind'
}

export function getLoopCommand(dObj) {
  const command = dObj.attribs['v-for']
  const separator = command.includes(' in ') ? ' in ' : ' of '
  const s = command.split(separator)
  return `${s[1].trim()}.map(${s[0].trim()} `
}

export function isBindingAttrs(attrName) {
  return attrName.startsWith(':')
}

export const toCamelCase = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && s[i - 1] === '-') {
      res += s[i].toUpperCase()
    } else if (s[i] !== '-') res += s[i]
  }
  return res
}

export function getAttrName(attrName, prefix) {
  return toCamelCase(attrName.split(prefix)[1])
}

export function isEventListener(attrName) {
  return attrName.startsWith('@')
}

export function getListenerName(attrName) {
  const idx = attrName.indexOf('.')
  if (idx === -1) return attrName.substr(1)
  else return attrName.substr(1, idx - 1)
}

export function getModifiers(attrName) {
  let res = attrName.split('.')
  res.shift()
  return res
}

export const convertEventListenerName = function (attrName) {
  const name = getListenerName(attrName)
  return toCamelCase(`on-${name}`).replace(/modelvalue/g, 'modelValue')
}

export const convertListener = function (listener) {
  const isFunction = listener.includes('=>') || (!listener.includes('(') && !listener.includes('='))
  return isFunction
    ? listener
    : listener.includes('$event')
      ? `(v) => {${listener.replace(/\$event/g, 'v')}}`
      : `() => ${listener}`
}

export const convertEventListener = function (listener, modifiers = []) {
  const eventName = convertListener(listener)
  return modifiers.length === 0
    ? `${eventName}`
    : `(event) => withModifiers(event, ${eventName}, [${modifiers.map((m) => `'${m}'`).join(', ')}])`
}

export const isVModel = function (attrName) {
  return attrName.startsWith('v-model')
}

export const isBooleanAttrs = function (attrName) {
  return attrName === ''
}

export const isRef = function (attrName) {
  return attrName === 'ref'
}

export const isDynamic = function (attrName) {
  return attrName === ':is'
}

export const convertRefName = function (name) {
  return toCamelCase(name)
}

const filename = fileURLToPath(import.meta.url)
export const dirname = path.dirname(filename)

export const capitalize = function (str) {
  return typeof str === 'string' ? str.slice(0, 1).toUpperCase() + str.slice(1) : str
}

export const capitalizeKebabCase = function (str, splitChar = '-') {
  return typeof str === 'string' ? str.split(splitChar).map(capitalize).join('') : str
}

export const kebabCase = (str, splitChar = '-') => {
  if (!str || typeof str !== 'string') return str

  return str
    .split('')
    .map((char, index) => {
      const charCod = char.charCodeAt(0)

      if (charCod < 65 || charCod > 122) return char

      return charCod >= 65 && charCod <= 90 ? (index !== 0 ? splitChar : '') + char.toLowerCase() : char
    })
    .join('')
}
