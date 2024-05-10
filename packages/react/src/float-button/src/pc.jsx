import { vc, If, Component, Slot, useSetup, useVm, $props } from '@opentiny/react-common'

import { renderless, api } from '@opentiny/vue-renderless/float-button/vue'
import { IconLoading, IconClose } from '@opentiny/react-icon'
import '@opentiny/vue-theme/float-button/index.less'
import { useRef } from 'react'

export default function FloatButton(props) {
  const {
    trigger = 'click',
    open,
    shape = 'circle',
    top = '',
    bottom = '20px',
    right = '20px',
    left = '',

    href = '',
    target = '',

    type = 'default',
    icon = '',
    description = '',
    tooltip = '',
    resetTime = 1000,
    size = '',
    loading,
    disabled,
    backTop,
    // 以下属性只有backTop设置为true才生效
    // 滚动高度达到此参数值才出现悬浮按钮
    visibilityHeight = 400,
    // 设置需要监听其滚动事件的元素
    element = document.body
  } = props
  const defaultProps = {
    ...$props,
    trigger,
    open,
    shape,
    top,
    bottom,
    right,
    left,

    href,
    target,

    type,
    icon,
    description,
    tooltip,
    resetTime,

    size,
    loading,
    disabled,
    backTop,
    visibilityHeight,
    element
  }
  const { current: vm, parent } = useVm()
  const tinyFloatButton = useRef()
  const tinyFloatButtonOpen = useRef()
  const { state, handleClick } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    doms: [tinyFloatButton, tinyFloatButtonOpen],
    parent
  })

  return (
    <button
      style={{ diaplay: state.show ? 'block' : 'none', top, bottom, right, left }}
      ref={tinyFloatButton}
      v-ref="tinyFloatButton"
      onClick={handleClick}
      className={vc([
        'tiny-float-button',
        type ? 'tiny-float-button--' + type : '',
        size ? 'tiny-float-button--' + size : '',
        {
          'is-disabled': state.buttonDisabled,
          'is-loading': loading,
          'is-icon': icon && !loading && (description || props.children),
          'is-only-icon': icon && !loading && !(description || props.children),
          'is-circle': shape === 'circle',
          'is-square': shape === 'square'
        }
      ])}>
      <If v-if={loading}>
        <IconLoading className="tiny-icon-loading tiny-svg-size" />
      </If>

      <Component
        v-if={icon && !loading && !state.open}
        is={icon}
        className={vc({ 'is-text': description || props.children })}
      />
      <If v-if={!loading && state.open}>
        <IconClose></IconClose>
      </If>
      <If v-if={description && !state.open}>
        <div>{description}</div>
      </If>
      <If v-if={state.open}>
        <div ref={tinyFloatButtonOpen} v-ref="tinyFloatButtonOpen" className="tiny-float-button--open">
          <Slot slots={props.slots} parent_children={props.children}>
            {' '}
          </Slot>
        </div>
      </If>
    </button>
  )
}
