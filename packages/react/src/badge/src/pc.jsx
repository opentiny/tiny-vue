import { useSetup, useVm, vc, If, Slot } from '@opentiny/react-common'
import { api, renderless } from '@opentiny/vue-renderless/badge/vue'
import '@opentiny/vue-theme/badge/index.less'

export default function (props) {
  const {
    isDot = false,
    isFixed = true,
    isMini = false,
    max,
    value,
    modelValue,
    href,
    target,
    hidden = false,
    type,
    badgeClass,
    offset = [0, 0],
    data
  } = props

  const defaultProps = Object.assign(
    {
      isDot,
      isFixed,
      isMini,
      hidden,
      offset
    },
    props
  )

  const { ref, parent, current: vm } = useVm()

  const { state } = useSetup({
    props: defaultProps,
    api,
    renderless,
    vm,
    parent
  })

  return (
    <div ref={ref} className="tiny-badge__wrapper">
      <If v-if={data}>
        <span>{data}</span>
      </If>
      <Slot v-if={!data} parent_children={props.children}></Slot>
      <If v-if={!hidden && (state.content || state.content === 0 || isDot)}>
        <div
          className={vc([
            'tiny-badge',
            isDot ? 'tiny-badge--default' : '',
            state.isOverstep ? 'tiny-badge--max' : '',
            type ? 'tiny-badge--' + type : '',
            badgeClass || ''
          ])}
          style={{
            transform: `translate(
              ${offset[0]}${typeof offset[0] === 'number' ? 'px' : ''},
              ${offset[1]}${typeof offset[1] === 'number' ? 'px' : ''}
            )`
          }}>
          <Slot name="content" slots={props.slots}>
            <If v-if={state.href}>
              <a href={state.href} target={target} rel="noopener noreferrer">
                {state.content}
              </a>
            </If>
            <If v-if={!state.href}>
              <span className="tiny-badge__content-text">{state.content}</span>
            </If>
          </Slot>
        </div>
      </If>
    </div>
  )
}
