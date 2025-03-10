import { customShapeAction, customFlowAction, batchCreateCustom } from '../utils'

export default class PaletteProvider {
  constructor(palette, create, elementFactory, globalConnect) {
    this.create = create
    this.elementFactory = elementFactory
    this.globalConnect = globalConnect
    palette.registerProvider(this)
  }

  getPaletteEntries(element) {
    const globalConnect = this.globalConnect
    const create = this.create
    const elementFactory = this.elementFactory
    const actions = {}
    function createConnect(type, group, className, title, options) {
      return {
        group,
        className,
        title: '新增' + title,
        action: {
          click(event) {
            globalConnect.toggle(event)
          }
        }
      }
    }

    function createAction(type, group, className, title, options) {
      function createListener(event) {
        let shape = elementFactory.createShape(Object.assign({ type }, options))
        create.start(event, shape)
      }

      return {
        group,
        className,
        title: '新增' + title,
        action: {
          dragstart: createListener,
          click: createListener
        }
      }
    }
    Object.assign(actions, {
      ...batchCreateCustom(customFlowAction, createConnect), // 线
      ...batchCreateCustom(customShapeAction, createAction)
    })
    return actions
  }
}

PaletteProvider.$inject = ['palette', 'create', 'elementFactory', 'globalConnect']
