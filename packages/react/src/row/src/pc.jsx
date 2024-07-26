import { renderless, api } from '@opentiny/vue-renderless/row/vue'
import { Component, Slot, useSetup, useVm, vc } from '@opentiny/react-common'

export default function Row(props) {
  const { flex, gutter = 0, justify = 'start', align = 'top', order, tag = 'div', noSpace = false } = props

  const defaultProps = {
    flex,
    gutter,
    justify,
    align,
    order,
    tag,
    noSpace
  }

  const { ref, current: vm, parent } = useVm()

  const { _, state } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  })

  return (
    <Component
      is={tag}
      className={vc(['tiny-row', state.className, props.className])}
      style={state.style}
      ref={(ins) => {
        ref.current = ins
        _.ref.current = ins
      }}>
      <Slot slots={props.slots} parent_children={props.children} />
    </Component>
  )
}
