import { useSetup, useVm, vc, If, Slot } from '@opentiny/react-common'
import { api, renderless } from '@opentiny/vue-renderless/badge/vue'
import '@opentiny/vue-theme-mobile/badge/index.less'

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
    offset = [0, 0]
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
    <div ref={ref} className="tiny-mobile-badge">
      <Slot parent_children={props.children}></Slot>
      <If v-if={!hidden && (value > 0 || isDot)}>
        <div
          className={vc([
            'tiny-mobile-badge__content',
            {
              'is-dot': isDot,
              'is-fixed': isFixed,
              'is-mini': isMini
            },
            value < 10 ? 'is-circle' : '',
            type ? 'tiny-mobile-badge--' + type : ''
          ])}>
          <If v-if={!isDot}>
            <span>
              <Slot name="content" slots={props.slots}>
                <a href={state.href} target={target} rel="noopener noreferrer" className="tiny-mobile-badge__link">
                  {state.content}
                </a>
              </Slot>
            </span>
          </If>
        </div>
      </If>
    </div>
  )
}
