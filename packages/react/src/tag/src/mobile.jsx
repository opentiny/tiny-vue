import { renderless, api } from '@opentiny/vue-renderless/tag/vue'
import { vc, Slot, useSetup, useVm } from '@opentiny/react-common'
import '@opentiny/vue-theme-mobile/tag/index.less'

export default function Tag(props) {
  const {
    hit,
    text,
    type,
    theme,
    size,
    color,
    closable,
    operable,
    disabled,
    selectable,
    customClass = '',
    effect = 'light',

    beforeDelete,
    value,
    mini = false,
    maxWidth = null
  } = props
  const defaultProps = {
    ...$props,
    hit,
    text,
    type,
    theme,
    size,
    color,
    closable,
    operable,
    disabled,
    selectable,
    customClass,
    effect,
    beforeDelete,
    value,
    mini,
    maxWidth
  }
  const { ref, current: vm, parent } = useVm()

  const { state } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  })
  return (
    <div
      ref={ref}
      className={vc(['tiny-mobile-tag', 'tiny-mobile-tag-' + state.color, state.mini ? 'tiny-mobile-tag-mini' : null])}
      style={{ maxWidth: state.maxWidth ? `${state.maxWidth}px` : null }}>
      <Slot slots={props.slots}>{state.text}</Slot>
    </div>
  )
}
