import { renderless, api } from '@opentiny/vue-renderless/layout/vue'
import { Component, Slot, useSetup, useVm, useProvide } from '@opentiny/react-common'

export default function Layout(props) {
  const { tag = 'div', slots = {}, ...restProps } = props

  const { ref, current: vm, parent } = useVm()

  const { _ } = useSetup({
    props: { tag, ...restProps },
    renderless,
    api,
    vm,
    parent
  })

  useProvide(_.vm, 'layout', { cols: props.cols })

  return (
    <Component
      is={tag}
      className="tiny-layout"
      ref={(ins) => {
        ref.current = ins
        _.ref.current = ins
      }}>
      <Slot slots={slots} parent_children={props.children} />
    </Component>
  )
}
