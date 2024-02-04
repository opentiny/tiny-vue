import { useSetup, useVm, Slot, $props, vc, Component, If } from '@opentiny/react-common'
import { renderless, api } from '@opentiny/vue-renderless/breadcrumb-item/vue'
import { useRef } from 'react'

export default function (props) {
  const { to = {}, replace = false, option = {}, label } = props
  const defaultProps = {
    ...$props,
    to,
    replace,
    option,
    label
  }
  const { ref, parent, current: vm } = useVm()
  const link = useRef()
  const { linkClick, inject } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    doms: [link]
  })
  const breadcrumb = inject('breadcrumb')
  return (
    <span className="tiny-breadcrumb__item" ref={ref} v-ref="ref">
      <span
        className={vc(['tiny-breadcrumb__inner', to ? 'is-link' : ''])}
        ref={link}
        v-ref="link"
        role="link"
        onClick={linkClick}>
        <Slot slots={props.slots} parent_children={props.children}>
          <span>{label}</span>
        </Slot>
      </span>
      <If v-if={breadcrumb.separatorIcon}>
        <Component is={breadcrumb.separatorIcon} className="tiny-svg-size tiny-breadcrumb__separator-cls" />
      </If>

      <If v-if={!breadcrumb.separatorIcon}>
        <span className="tiny-breadcrumb__separator">{breadcrumb.separator}</span>
      </If>
    </span>
  )
}
