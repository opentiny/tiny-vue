import { cloneDeep } from 'lodash-es'
import {
  builtinDirectivesWithoutVModel,
  isVModel,
  convertText,
  isSlotAttribute,
  isBooleanAttrs,
  isVIf,
  isVElse,
  isVFor,
  isTextBlank,
  isRef,
  convertRefName,
  getCondition,
  getTag,
  getFirstChild,
  isEmptyObject,
  isText,
  getText,
  isVElseIf,
  getLoopCommand,
  getSlotProps,
  getSlotName,
  isBindingAttrs,
  getAttrName,
  isEventListener,
  getModifiers,
  convertEventListenerName,
  convertEventListener,
  isBindClass,
  isBindAll,
  isComponent,
  setDynamicComponent,
  capitalizeKebabCase,
  isTransition
} from './helpers.js'

let renderDomAttrs = []

const renderSlots = (slots) => {
  if (Object.keys(slots).length === 0) return ''
  let res = ` v-slots={{ `
  Object.keys(slots).forEach((slotName) => {
    let content = slots[slotName].content
    if (!content.startsWith('<>')) content = `<> ${content} </>\n`
    if (!isTextBlank(slots[slotName].content))
      res = res + `'${slotName}': (${slots[slotName].slotProps}) => ${content}, \n`
  })
  res += ` }}`
  return res
}

const convertAttrs = function (attrs) {
  const res = {}

  Object.keys(attrs).forEach((attrName) => {
    if (isSlotAttribute(attrName) || isBindAll(attrName)) return
    if (isBindingAttrs(attrName)) {
      if (isBindClass(attrName)) {
        res.classList = `{ getClassList(${attrs[attrName]}) }`
      } else {
        res[getAttrName(attrName, ':')] = `{ ${attrs[attrName]} }`
      }
    } else if (isEventListener(attrName)) {
      const eventListenerName = convertEventListenerName(attrName)
      const modifiers = getModifiers(attrName)
      const listener = convertEventListener(attrs[attrName], modifiers)
      res[eventListenerName] = `{${listener}}`
    } else if (isVModel(attrName)) {
      res[attrName] = `{${attrs[attrName]}}`
    } else if (isRef(attrName)) {
      res[attrName] = `{${convertRefName(attrs[attrName])}}`
    } else if (isBooleanAttrs(attrs[attrName])) {
      res[attrName] = ''
    } else {
      res[attrName] = `"${attrs[attrName]}"`
    }
  })
  return res
}

const renderAttrs = function (attrs) {
  let res = ''
  Object.keys(attrs).forEach((attrName) => {
    res += attrs[attrName] === '' ? `${attrName} ` : `${attrName}=${attrs[attrName]} ` // boolean attrs
  })
  return res === '' ? '' : ` ${res}`
}

const renderDomObj = function (dObj, needWrap = true) {
  if (isEmptyObject(dObj)) {
    return ''
  }

  if (isText(dObj)) return convertText(getText(dObj))

  if (isComponent(dObj)) {
    setDynamicComponent(dObj)
  }

  const tagName = getTag(dObj)
  const slots = renderVueDomObject(getFirstChild(dObj))
  const attrs = convertAttrs(cloneDeep(dObj.attribs))
  let tag = tagName === 'template' ? '' : tagName

  builtinDirectivesWithoutVModel.forEach((attr) => delete attrs[attr])

  if (Object.keys(dObj.attribs).length) {
    renderDomAttrs.push(dObj.attribs)
    if (dObj.name === 'slot') {
      renderDomAttrs.push({ 'v-slot': `slots.${dObj.attribs.name}` })
    }
  }

  if (tagName.indexOf('icon-') === 0) {
    tag = capitalizeKebabCase(tag)
  } else if (isTransition(dObj)) {
    tag = capitalizeKebabCase(tag)
    attrs.onExit = '{ (el, done) => { setTimeout(done, 300) } }'

    const getRealClassName = (part) => `"${(attrs.name + part).replace(/"/g, '')}"`
    attrs.enterToClass = getRealClassName('-enter-from')
    attrs.exitActiveClass = getRealClassName('-leave-active')
  }

  if (Object.keys(slots).length < 2) {
    let content = slots.default?.content || ''
    if (!tag) {
      let slotName = 'children'

      if (attrs.name) {
        slotName = `slots.${attrs.name.replace(/["']/g, '')}`
      }

      if (!content) {
        return `\n { ${slotName} } \n`
      }

      if (!/<[^>]+>/.test(content)) {
        content = `<span>${content}</span>`
      }

      if (needWrap) {
        return `{ ${slotName} || ${content} }`
      }

      return `(${slotName} || ${content})`
    }

    return `<${tag}${renderAttrs(attrs)}> \n ${content}</${tag}>\n`
  }

  return `<${tag}${renderAttrs(attrs)}${renderSlots(slots)}></${tag}>\n`
}

const renderVIfSegment = function (first, last, nodes, isRoot) {
  const open = isRoot ? '{' : '('
  const close = isRoot ? '}' : ')'
  const domContent = renderDomObj(nodes[first], false)

  if (first + 1 === last) {
    return `${open} \n (${getCondition(nodes[first])}) && \n ${domContent} ${close} \n`
  } else {
    if (isVElse(nodes[first + 1])) {
      return `${open} \n (${getCondition(nodes[first])}) ? \n ${domContent} : \n
              ${renderDomObj(nodes[first + 1])} ${close} \n`
    } else {
      return `${open} \n (${getCondition(nodes[first])}) ? \n ${domContent} : \n
              ${renderVIfSegment(first + 1, last, nodes)} ${close} \n`
    }
  }
}

const renderVFor = function (dObj) {
  return `{${getLoopCommand(dObj)} => \n ${renderDomObj(dObj)} )}`
}

const renderVueDomObject = function (dObj) {
  if (!dObj) return ''
  let _dObj = cloneDeep(dObj)
  let slots = {}

  slots.default = { slotProps: '', content: '', nodes: [] }

  function addNode(dObj) {
    if (isEmptyObject(_dObj)) return
    const slotName = getSlotName(dObj)

    if (dObj.name === 'slot') {
      dObj.name = 'template'
    }

    slots[slotName] = slots[slotName] || { slotProps: getSlotProps(dObj), nodes: [] }
    slots[slotName].nodes.push(dObj)
  }

  addNode(_dObj)
  while (_dObj.next) {
    _dObj = _dObj.next
    addNode(_dObj)
  }

  function renderNodes(nodes) {
    let res = ''
    for (let i = 0; i < nodes.length; i++) {
      if (isVIf(nodes[i])) {
        let j = i + 1
        while (j < nodes.length && isVElseIf(nodes[j])) j++
        if (j < nodes.length) {
          if (isVElse(nodes[j])) j++
        }
        res += renderVIfSegment(i, j, nodes, true)
        i = j - 1
      } else if (isVFor(nodes[i])) {
        res = res + renderVFor(nodes[i])
      } else {
        res = res + renderDomObj(nodes[i])
      }
    }
    return res
  }

  Object.keys(slots).forEach((slotName) => {
    let nodes = slots[slotName].nodes
    let content = renderNodes(nodes)
    slots[slotName].content = content
  })
  return slots
}

const vueOperators = ':,v-,@'.split(',')
const globalProps = 'true,false'.split(',')
const charReg = /[\n\+\[\&\]!=\{\},\?\:\|]/g
const specialProps = 'a,$attrs,state,children,slots'.split(',')

const getUseAttrs = function () {
  let attrs = renderDomAttrs
    .map((item) => {
      return Object.entries(item)
        .filter(([key, _]) => vueOperators.some((val) => key.indexOf(val) === 0))
        .map((arr) => arr[1])
        .map((key) =>
          key
            .replace(charReg, ' ')
            .split(' ')
            .filter((name) => name && !name.includes('-') && !name.includes("'"))
        )
        .flat()
    })
    .flat()
    .map((item) => {
      return item.split(/[\(\)]/)
    })
    .flat()
    .filter((name) => name.length && !globalProps.includes(name))

  attrs = [...new Set(attrs)]

  const realAttrs = [...new Set(attrs.map((attr) => attr.split('.')[0]))].filter((name) => !specialProps.includes(name))

  return {
    attrs,
    realAttrs
  }
}

export default function (dObj) {
  renderDomAttrs = []
  const component = renderVueDomObject(dObj)
  const useAttrs = getUseAttrs()

  return {
    ...component,
    useAttrs
  }
}
