import { renderless, api } from '@opentiny/vue-renderless/progress/vue'
import { vc, If, Component, useSetup, useVm, $props, Transition } from '@opentiny/react-common'
import '@opentiny/vue-theme/progress/index.less'
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

  const { state, customBeforeAppearHook, customAppearHook, customAfterAppearHook } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: $constants,
    vm,
    parent
  })
  console.log(status, 'status')
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
        'tiny-progress',
        'tiny-progress--' + type,
        status ? 'is-' + status : '',
        {
          'tiny-progress--without-text': !showText,
          'tiny-progress--text-inside': textInside
        }
      ])}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100">
      <If v-if={type === 'line'}>
        <div className="tiny-progress-bar">
          <div
            className="tiny-progress-bar__outer"
            style={{ height: state.strokeWidth + 'px', borderRadius: `${state.strokeWidth / 2}px` }}>
            <Transition
              appear
              appear-className="custom-appear-className"
              beforeEnter={customBeforeAppearHook}
              enter={customAppearHook}
              className="tiny-progress-bar__inner"
              afterEnter={customAfterAppearHook}>
              <div style={{ ...state.barStyle, borderRadius: `${state.strokeWidth / 2}px` }}>
                <If v-if={showText && textInside}>
                  <div className="tiny-progress-bar__innerText">{state.content}</div>
                </If>
              </div>
            </Transition>
          </div>
        </div>
      </If>
      <If v-if={type !== 'line'}>
        <div className="tiny-progress-circle" style={{ height: state.width + 'px', width: state.width + 'px' }}>
          <svg viewBox="0 0 100 100">
            <path
              className="tiny-progress-circle__track"
              d={state.trackPath}
              stroke="#e5e9f2"
              stroke-width={state.relativeStrokeWidth}
              fill="none"
              style={state.trailPathStyle}></path>
            <Transition
              appear
              appear-className="custom-appear-className"
              beforeEnter={customBeforeAppearHook}
              enter={customAppearHook}
              className="tiny-progress-circle__path"
              afterEnter={customAfterAppearHook}>
              <path
                d={state.trackPath}
                stroke={state.stroke}
                fill="none"
                stroke-linecap="round"
                stroke-width={percentage ? state.relativeStrokeWidth : 0}
                style={state.circlePathStyle}></path>
            </Transition>
          </svg>
        </div>
      </If>
      <If v-if={showText && !textInside}>
        <div className="tiny-progress__text" style={{ fontSize: state.progressTextSize + 'px' }}>
          {!status ? state.content : <Component is={getIcon(state.iconClass)} className="tiny-svg-size" />}
        </div>
      </If>
    </div>
  )
}
