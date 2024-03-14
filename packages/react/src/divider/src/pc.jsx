import { renderless, api } from '@opentiny/vue-renderless/divider/vue'
import { If, useSetup, useVm, vc, Slot, $props } from '@opentiny/react-common'

const $constants = {}

export default function Divider(props) {
  const {
    _constants = $constants,
    direction = 'horizontal',
    color = '',
    borderStyle = 'solid',
    contentPosition = 'center',
    contentColor = '',
    contentBackgroundColor = ''
  } = props
  const defaultProps = {
    ...$props,
    _constants,
    direction,
    color,
    borderStyle,
    contentPosition,
    contentColor,
    contentBackgroundColor
  }
  const { current: vm, parent } = useVm()
  useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  })
  return (
    <div
      className={vc(['tiny-divider', 'tiny-divider--' + direction])}
      style={{
        'borderTopStyle': direction === 'horizontal' ? borderStyle : '',
        'borderLeftStyle': direction === 'vertical' ? borderStyle : '',
        'borderColor': color
      }}>
      <If v-if={props.children}>
        <div
          className={vc(['tiny-divider__text', 'is-' + contentPosition])}
          style={{
            color: contentColor,
            'backgroundColor': contentBackgroundColor
          }}>
          <Slot slots={props.slots} parent_children={props.children}></Slot>
        </div>
      </If>
    </div>
  )
}
