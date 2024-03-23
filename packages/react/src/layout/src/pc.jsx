import { renderless, api } from '@opentiny/vue-renderless/layout/vue'
import { Component, Slot, useSetup, useVm } from '@opentiny/react-common'

export default function Layout(props) {
  const { tag = 'div', slots = {}, ...restProps } = props

  const { ref, current: vm, parent } = useVm()

  const setupProps = useSetup({
    props: { tag, ...restProps },
    renderless,
    api,
    vm,
    parent
  })

  return (
    <Component is={tag} className="tiny-layout">
      <Slot slots={slots} parent_children={props.children} />
    </Component>
  )
}
