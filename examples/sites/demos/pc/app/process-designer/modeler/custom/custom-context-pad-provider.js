import { isAny } from 'bpmn-js/lib/features/modeling/util/ModelingUtil'
import { batchCreateCustom, customShapeAction, customFlowAction } from '../utils'

export default class ContextPadProvider {
  constructor(contextPad, config, injector, translate, bpmnFactory, elementFactory, crate, modeling, connect) {
    this.contextPad = contextPad
    this.config = config
    this.injector = injector
    this.translate = translate
    this.bpmnFactory = bpmnFactory
    this.elementFactory = elementFactory
    this.crate = crate
    this.modeling = modeling
    this.connect = connect
    config = config || {}
    if (config.autoPlace) {
      this.autoPlace = injector.get('autoPlace', false)
    }
    contextPad.registerProvider(this)
  }

  getContextPadEntries(element) {
    const actions = {}
    const businessObject = element.businessObject
    const autoPlace = this.autoPlace
    const create = this.create
    const elementFactory = this.elementFactory
    const translate = this.translate
    const modeling = this.modeling
    const bpmnFactory = this.bpmnFactory
    const connect = this.connect
    const removeElement = (ele) => {
      modeling.removeElements(ele)
    }
    const startConnect = (ev, element) => {
      connect.start(ev, element)
    }
    const createAction = (type, group, className, title, options) => {
      const appendCustomElements = (type) => {
        return function (event, element) {
          if (autoPlace) {
            const businessObject = bpmnFactory.create(type)
            const shape = elementFactory.createShape(
              Object.assign(
                {
                  type,
                  businessObject
                },
                options
              )
            )
            autoPlace.append(element, shape)
          } else {
            appendCustomElementsStart(event, element)
          }
        }
      }

      const appendCustomElementsStart = (type) => {
        return function (event) {
          const businessObject = bpmnFactory.create(type)
          const shape = elementFactory.createShape(
            Object.assign(
              {
                type,
                businessObject
              },
              options
            )
          )
          create.start(event, shape, element)
        }
      }
      return {
        group,
        className,
        title: translate(title),
        action: {
          click: appendCustomElements(type),
          dragstart: appendCustomElementsStart(type)
        }
      }
    }

    const createConnect = (type, group, className, title, options) => {
      return {
        group,
        className,
        title,
        action: {
          click: startConnect,
          dragstart: startConnect
        }
      }
    }

    const editElement = () => {
      return {
        group: 'edit',
        className: 'icon-custom icon-custom-edit',
        title: translate('编辑'),
        action: {
          click: () => {
            console.log('click')
          }
        }
      }
    }

    const deleteElement = () => {
      return {
        group: 'edit',
        className: 'icon-custom icon-custom-delete',
        title: translate('删除'),
        action: {
          click: removeElement
        }
      }
    }

    if (
      isAny(businessObject, [
        'bpmn:StartEvent',
        'bpmn:Task',
        'bpmn:BusinessRuleTask',
        'bpmn:ExclusiveGateway',
        'bpmn:DataObjectReference'
      ])
    ) {
      Object.assign(actions, {
        ...batchCreateCustom(customShapeAction, createAction),
        ...batchCreateCustom(customFlowAction, createConnect), // 连接线
        'edit': editElement(),
        'delete': deleteElement()
      })
    }
    // 结束节点和线只有删除和编辑
    if (isAny(businessObject, ['bpmn:EndEvent', 'bpmn:SequenceFlow', 'bpmn:DataOutputAssociation'])) {
      Object.assign(actions, {
        'edit': editElement(),
        'delete': deleteElement()
      })
    }
    return actions
  }
}

ContextPadProvider.$inject = [
  'contextPad',
  'config',
  'injector',
  'translate',
  'bpmnFactory',
  'elementFactory',
  'create',
  'modeling',
  'connect'
]
