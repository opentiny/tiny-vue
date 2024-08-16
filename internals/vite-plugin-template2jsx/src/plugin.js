import parse from 'html-dom-parser'
import renderVueDomObject from './render.js'
import { parseComponent } from 'vue-template-compiler'
import { template } from 'lodash-es'

// 处理computed操作，如果想要具有响应式需要特殊处理
const computedMap = {
  button: ['buttonDisabled', 'plain', 'formDisabled'],
  alert: ['getIcon', 'getTitle', 'alertClass', 'alertStyle'],
  switch: ['wrapClasses', 'isDisplayOnly', 'innerClasses']
}

export const transformVueTemplateToSolid = (jsxTemplate, vueCode, componentName, mapData) => {
  const component = parseComponent(vueCode)

  if (component.template && component.script) {
    const useCommons = [
      'useSetup',
      'getClassList',
      'mergeProps',
      'resolveComponent',
      '$prefix',
      'TransitionGroup',
      'Transition',
      't',
      'withModifiers'
    ]
    const script = component.script.content
    const startStr = 'props: ['
    const sliceStr = script.substring(script.indexOf(startStr) + startStr.length)
    const props = sliceStr
      .substring(0, sliceStr.indexOf(']'))
      .replace('...props,', '')
      .replace(/[\n\s']/g, '')
      .split(',')

    const specialVars = ['useIcons']
    const node = parse(component.template.content, { recognizeSelfClosing: true })[0]
    const renderNode = renderVueDomObject(node)
    const useApi = renderNode.useAttrs.realAttrs.filter(
      (item) => !props.includes(item) && !useCommons.includes(item) && !specialVars.includes(item)
    )
    let useProps = props.filter((item) => renderNode.useAttrs.realAttrs.includes(item))
    let jsxContent = renderNode.default.content.replace(/slots\.default/g, 'children')
    let defaultProps = []
    let importIcons = script.match(/import\s?{\s?ico.+/)
    let useIcons = '{}'

    if (computedMap[componentName]) {
      computedMap[componentName].forEach((item) => {
        jsxContent = jsxContent.replaceAll(`state.${item}`, `state.${item}()`)
      })
    }

    if (mapData.$props) {
      const getKeyValue = (key, props, char = '=') => {
        return `${key} ${char} ${props.type === 'Char' ? `'${props.value}'` : props.value}`
      }

      useProps = useProps.map((item) => {
        const props = mapData.$props[item]
        if (props) {
          return getKeyValue(item, props)
        }

        return item
      })

      for (let key in mapData.$props) {
        const props = mapData.$props[key]
        defaultProps.push(getKeyValue(key, props, ':'))
      }
    }

    importIcons = importIcons?.[0]
    if (importIcons) {
      importIcons = importIcons.replace(/icon/g, 'Icon')
      useIcons = importIcons.match(/\{(.+)\}/)[0] || '{}'
    }

    const realComponet = template(jsxTemplate)({
      USEAPI: useApi.join(','),
      USEPROPS: useProps.join(','),
      JSX: jsxContent,
      NAME: componentName,
      CONSTANTS: mapData.$constants || '{}',
      DEFAULTPROPS: defaultProps.join(','),
      IMPORTICONS: importIcons,
      USEICONS: useIcons,
      USECOMMONS: useCommons.join(',')
    })

    return realComponet
  }
}
