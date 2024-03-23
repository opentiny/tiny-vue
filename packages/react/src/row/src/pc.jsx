import { renderless, api } from '@opentiny/vue-renderless/row/vue'
import { Component, Slot, useSetup, useVm, vc } from '@opentiny/react-common'

export default function Row(props) {
  const { flex, gutter, justify, align, order, tag = 'div', noSpace } = props

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

  const { state } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  })

  return (
    <Component is={tag} className={vc(['tiny-row', state.className])} style={state.style}>
      <Slot slots={props.slots} parent_children={props.children} />
    </Component>
  )
}
