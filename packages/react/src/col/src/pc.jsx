import { renderless, api } from '@opentiny/vue-renderless/col/vue'
import { Component, useSetup, useVm, vc } from '@opentiny/react-common'

export default function Col(props) {
  const { span, offset, no, move, xs, sm, md, lg, xl, tag = 'div', children } = props

  const defaultProps = {
    span,
    offset,
    no,
    move,
    xs,
    sm,
    md,
    lg,
    xl,
    tag
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
      className={vc([state.className, 'tiny-col'])}
      style={state.style}
      ref={(ins) => {
        ref.current = ins
        _.ref.current = ins
      }}>
      {children}
    </Component>
  )
}
