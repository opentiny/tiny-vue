import Modeler from 'bpmn-js/lib/Modeler'
import CustomModule from './custom'

export default class CustomModeler extends Modeler {
  constructor(options) {
    super(options)
    this._customElements = []
  }
}
CustomModeler.prototype._modules = [].concat(CustomModeler.prototype._modules, [CustomModule])
