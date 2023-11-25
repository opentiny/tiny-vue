export const errorDeprecatedRuleGroupProps =
  'A custom RuleGroup component has rendered a standard RuleGroup ' +
  'component with deprecated props. The combinator, not, and rules ' +
  'props should not be used. Instead, the full group object should ' +
  'be passed as the ruleGroup prop.'

export const errorDeprecatedRuleProps =
  'A custom RuleGroup component has rendered a standard Rule ' +
  'component with deprecated props. The field, operator, value, and valueSource ' +
  'props should not be used. Instead, the full rule object should ' +
  'be passed as the rule prop.'

export const errorBothQueryDefaultQuery =
  'QueryBuilder was rendered with both query and defaultQuery props. ' +
  'QueryBuilder must be either controlled or uncontrolled (specify ' +
  'either the query prop, or the defaultQuery prop, but not both). ' +
  'Decide between using a controlled or uncontrolled query builder ' +
  'and remove one of these props. More info: https://reactjs.org/link/controlled-components'

export const errorUncontrolledToControlled =
  'QueryBuilder is changing from an uncontrolled component to be controlled. ' +
  'This is likely caused by the query changing from undefined to ' +
  'a defined value, which should not happen. ' +
  'Decide between using a controlled or uncontrolled query builder ' +
  'for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'

export const errorControlledToUncontrolled =
  'QueryBuilder is changing from a controlled component to be uncontrolled. ' +
  'This is likely caused by the query changing from defined to ' +
  'undefined, which should not happen. ' +
  'Decide between using a controlled or uncontrolled query builder ' +
  'for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'

export const errorEnabledDndWithoutReactDnD =
  'QueryBuilder was rendered with the enableDragAndDrop prop set to true, ' +
  'but either react-dnd or react-dnd-html5-backend (or both) was not installed. ' +
  'To enable drag-and-drop functionality, install both packages and wrap ' +
  'QueryBuilder in QueryBuilderDnD from @react-querybuilder/dnd.'
