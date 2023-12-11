import { renderless, api } from '@opentiny/vue-renderless/alert/vue'
import { IconClose, IconSuccess, IconError, IconHelp, IconWarning } from '@opentiny/openinula-icon'
import { vc, If, Component, Slot, useSetup, useVm } from '@opentiny/openinula-common'
import '@opentiny/vue-theme-mobile/alert/index.less'

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
    showIcon = true,
    closable = true,
    closeText,
    _constants = $constants,
    description = ''
  } = props

  const defaultProps = Object.assign(
    {
      type,
      size,
      showIcon,
      closable,
      _constants
    },
    props
  )

  const { ref, current: vm, parent } = useVm()

  const { state, handleClose } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    constants: _constants
  })

  return (
    <div ref={ref}>
      <If v-if={state.show}>
        <div
          className={vc([
            'tiny-mobile-alert',
            'tiny-mobile-alert--' + type,
            'tiny-mobile-alert--' + size,
            'is-center'
          ])}>
          <Component v-if={showIcon} is={state.getIcon} className="tiny-mobile-alert__icon" />
          <div className={vc([['tiny-mobile-alert__content', { 'is-hideicon': !showIcon }]])}>
            <Slot {...props}>{description}</Slot>
          </div>
          <If v-if={!closeText && closable}>
            <IconClose onClick={handleClose} className="tiny-mobile-alert__icon tiny-mobile-alert__close" />
          </If>
          <If v-if={closeText && closable}>
            <span onClick={handleClose} className="is-custom">
              {closeText}
            </span>
          </If>
        </div>
      </If>
    </div>
  )
}
