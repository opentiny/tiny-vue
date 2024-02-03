import ActionElement from './ActionElement.vue'
import InlineCombinator from './InlineCombinator.vue'
import NotToggle from './NotToggle.vue'
import Rule from './Rule.vue'
import RuleGroup from './RuleGroup.vue'
import ValueEditor from './ValueEditor.vue'
import ValueSelector from './ValueSelector.vue'
import FieldSelector from './FieldSelector.vue'
import Combinator from './Combinator.vue'
import DragHandle from './DragHandle.vue'

export const defaultControlElements = {
  addGroupAction: ActionElement,
  removeGroupAction: ActionElement,
  cloneGroupAction: ActionElement,
  cloneRuleAction: ActionElement,
  addRuleAction: ActionElement,
  clearDataAction: ActionElement,
  removeRuleAction: ActionElement,
  combinatorSelector: Combinator,
  inlineCombinator: InlineCombinator,
  operatorSelector: ValueSelector,
  fieldSelector: FieldSelector,
  valueEditor: ValueEditor,
  ruleGroup: RuleGroup,
  notToggle: NotToggle,
  lockRuleAction: ActionElement,
  rule: Rule,
  dragHandle: DragHandle,
  valueSourceSelector: ValueSelector,
  lockGroupAction: ActionElement
}
