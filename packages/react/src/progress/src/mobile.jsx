import { renderless, api } from '@opentiny/vue-renderless/progress/vue'
import { vc, If, Component, useSetup, useVm } from '@opentiny/react-common'
import '@opentiny/vue-theme-mobile/progress/index.less'
import { $constants } from './index'
import { IconYes, IconSuccess, IconError, IconClose, IconWarning } from '@opentiny/react-icon'

export default function Progress(props) {
  const {
    type = $constants.PROGRESS_TYPE.LINE,
    percentage = 0,
    status,
    strokeWidth = 0,
    textInside = false,
    width = 0,
    showText = true,
    color = '',
    format
  } = props
  const defaultProps = {
    ...$props,
    ...props,
    type,
    percentage,
    status,
    strokeWidth,
    textInside,
    width,
    showText,
    color,
    format
  }
  const { ref, current: vm, parent } = useVm()

  const { state } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: $constants,
    vm,
    parent
  })
  const getIcon = (className) => {
    return {
      'icon-yes': IconYes,
      'icon-success': IconSuccess,
      'icon-close': IconClose,
      'icon-error': IconError,
      'icon-warning': IconWarning
    }[className]
  }
  return (
    <div
      ref={ref}
      className={vc([
        'tiny-mobile-progress',
        'tiny-mobile-progress--' + type,
        status ? 'is-' + status : '',
        {
          'tiny-mobile-progress__without-text': !showText,
          'tiny-mobile-progress__inside-text': textInside
        }
      ])}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100">
      <If v-if={type === 'line'}>
        <div className="tiny-mobile-progress-bar">
          <div className="tiny-mobile-progress-bar__outer" style={{ height: strokeWidth + 'px' }}>
            <div className="tiny-mobile-progress-bar__inner" style={state.barStyle}>
              <If v-if={showText && textInside && strokeWidth > 12}>
                <div className="tiny-mobile-progress-bar__innerText">{state.content}</div>
              </If>
            </div>
          </div>
        </div>
      </If>
      <If v-if={type !== 'line'}>
        <div className="tiny-mobile-progress-circle" style={{ height: width + 'px', width: width + 'px' }}>
          <svg viewBox="0 0 100 100">
            <path
              className="tiny-mobile-progress-circle__track"
              d={state.trackPath}
              stroke="#e5e9f2"
              stroke-width={state.relativeStrokeWidth}
              fill="none"
              style={state.trailPathStyle}></path>
            <path
              className="tiny-mobile-progress-circle__path"
              d={state.trackPath}
              stroke={state.stroke}
              fill="none"
              stroke-linecap="round"
              stroke-width={percentage ? state.relativeStrokeWidth : 0}
              style={state.circlePathStyle}></path>
          </svg>
        </div>
      </If>
      <If v-if={showText && !textInside}>
        <div className="tiny-mobile-progress-text" style={{ fontSize: state.progressTextSize + 'px' }}>
          {!status ? state.content : <Component v-else is={getIcon(state.iconClass)} />}
        </div>
      </If>
    </div>
  )
}
