import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
import { IconClose, IconSuccess, IconError, IconHelp, IconWarning } from '@opentiny/react-icon'
import '@opentiny/vue-theme/alert/index.less'
import { vc, If, Component, Slot, useSetup, useVm } from '@opentiny/react-common'

const $constants = {
  ICON_MAP: {
    success: IconSuccess,
    error: IconError,
    info: IconHelp,
    warning: IconWarning
  },
  TITLE_MAP: {
    success: 'ui.alert.success',
    error: 'ui.alert.error',
    info: 'ui.alert.info',
    warning: 'ui.alert.warning'
  },
  CONTENT_MAXHEUGHT: 252
}

export default function Alert(props) {
  const {
    type = 'success',
    size = 'normal',
    center = false,
    showIcon = true,
    description = '',
    slots = {},
    _constants = $constants,
    closable = true,
    closeText,
    title
  } = props

  const defaultProps = {
    type,
    size,
    center,
    showIcon,
    description,
    slots,
    _constants,
    closable,
    closeText,
    title
  }

  const { ref, current: vm, parent } = useVm()

  const { state, handleClose } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    parent
  })
  return (
    <div className="tiny-transition-alert-fade" ref={ref}>
      <If v-if={state.show}>
        <div className={vc(['tiny-alert', 'tiny-alert--' + type, 'tiny-alert--' + size, center && 'is-center'])}>
          <Component v-if={showIcon} is={state.getIcon} className="tiny-svg-size tiny-alert__icon" />
          <div className="tiny-alert__content">
            <If v-if={size === 'large'}>
              <div className="tiny-alert__title">
                <Slot name="title" slots={props.slots}>
                  {state.getTitle}
                </Slot>
              </div>
            </If>
            <div
              className={vc([
                'tiny-alert__description',
                size === 'large' && !description && !slots.description && 'is-hide'
              ])}>
              <Slot name="description" slots={props.slots}>
                {description}
              </Slot>
            </div>
            <If v-if={size === 'large'}>
              <div className="tiny-alert__opration">
                <Slot slots={props.slots} parent_child={props.children} />
              </div>
            </If>
          </div>
          <If v-if={!closeText && closable}>
            <IconClose
              className={vc(['tiny-svg-size', 'tiny-alert__icon', 'tiny-alert__close'])}
              onClick={handleClose}
            />
          </If>
          <If v-if={!closeText && !closable}>
            <span className="is-custom" onClick={handleClose}>
              <Slot name="close" slots={props.slots} parent_child={props.children} />
            </span>
          </If>
          <If v-if={closeText && closable}>
            <span className="is-custom" onClick={handleClose}>
              {closeText}
            </span>
          </If>
        </div>
      </If>
    </div>
  )
}
