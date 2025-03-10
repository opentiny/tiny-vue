const customElements = [
  'bpmn:StartEvent',
  'bpmn:EndEvent',
  'bpmn:Task',
  'bpmn:BusinessRuleTask',
  'bpmn:ExclusiveGateway',
  'bpmn:DataObjectReference'
] // 自定义元素的类型
const STATICPATH = '/static/images/process-designer/' // 静态文件路径
const customConfig = {
  // 自定义元素的配置
  'bpmn:StartEvent': {
    'field': 'start',
    'title': '开始节点',
    'attr': { x: 0, y: 0, width: 40, height: 40 }
  },
  'bpmn:EndEvent': {
    'field': 'end',
    'title': '结束节点',
    'attr': { x: 0, y: 0, width: 40, height: 40 }
  },
  'bpmn:SequenceFlow': {
    'field': 'flow',
    'title': '连接线'
  },
  'bpmn:Task': {
    'field': 'rules',
    'title': '普通任务',
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:BusinessRuleTask': {
    'field': 'variable',
    'title': 'businessRule任务',
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:ExclusiveGateway': {
    'field': 'decision',
    'title': '网关',
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  },
  'bpmn:DataObjectReference': {
    'field': 'score',
    'title': '变量',
    'attr': { x: 0, y: 0, width: 48, height: 48 }
  }
}
const hasLabelElements = ['bpmn:StartEvent', 'bpmn:EndEvent', 'bpmn:ExclusiveGateway', 'bpmn:DataObjectReference'] // 一开始就有label标签的元素类型

const flowAction = {
  type: 'global-connect-tool',
  action: ['bpmn:SequenceFlow', 'tools', 'icon-custom icon-custom-flow', '连接线']
}
const customShapeAction = [
  {
    type: 'create.start-event',
    action: ['bpmn:StartEvent', 'event', 'icon-custom icon-custom-start', '开始节点']
  },
  {
    type: 'create.end-event',
    action: ['bpmn:EndEvent', 'event', 'icon-custom icon-custom-end', '结束节点']
  },
  {
    type: 'create.task',
    action: ['bpmn:Task', 'activity', 'icon-custom icon-custom-task', '普通任务']
  },
  {
    type: 'create.businessRule-task',
    action: ['bpmn:BusinessRuleTask', 'activity', 'icon-custom icon-custom-businessRule', 'businessRule任务']
  },
  {
    type: 'create.exclusive-gateway',
    action: ['bpmn:ExclusiveGateway', 'activity', 'icon-custom icon-custom-exclusive-gateway', '网关']
  },
  {
    type: 'create.dataObjectReference',
    action: ['bpmn:DataObjectReference', 'activity', 'icon-custom icon-custom-data', '变量']
  }
]
const customFlowAction = [flowAction]
/**
 * 循环创建出一系列的元素
 * @param {Array} actions 元素集合
 * @param {Object} fn 处理的函数
 */
export function batchCreateCustom(actions, fn) {
  const customs = {}
  actions.forEach((item) => {
    customs[item.type] = fn(...item.action)
  })
  return customs
}

export { customElements, customConfig, STATICPATH, hasLabelElements, customShapeAction, customFlowAction }
