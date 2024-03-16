import { renderless, api } from '@opentiny/vue-renderless/input/vue'
import { vc, If, Slot, useSetup, useVm, $props, handlePrevent, Component, Transition } from '@opentiny/react-common'
import TinyTallStorage from './tall-storage.jsx'
import { IconClose } from '@opentiny/react-icon'
import Tooltip from '@opentiny/react-tooltip'
import '@opentiny/vue-theme/input/index.less'
import '@opentiny/vue-theme/textarea/index.less'
import { $constants } from './index.ts'
import { useRef } from 'react'

const define_props = [
  'children',
  '_constants',
  'name',
  'size',
  'form',
  'label',
  'height',
  'resize',
  'tabindex',
  'disabled',
  'readonly',
  'hoverExpand',
  'mask',
  'suffixIcon',
  'prefixIcon',
  'modelValue',
  'type',
  'memorySpace',
  'vertical',
  'selectMenu',
  'ellipsis',
  'contentStyle',
  'isSelect',
  'tips',
  'counter',
  'autosize',
  'clearable',
  'autocomplete',
  'showPassword',
  'showWordLimit',
  'showTitle',
  'validateEvent',

  'displayOnly',
  'displayOnlyContent',
  'customClass',
  'frontClearIcon',
  'showEmptyValue',
  'textAlign',
  'width',
  /^on/
]
export default function Input(props) {
  const {
    _constants = $constants,
    name,
    size,
    form,
    label,
    height,
    resize,
    tabindex = '1',
    disabled,
    readonly,
    hoverExpand,
    mask,
    suffixIcon,
    prefixIcon,
    modelValue,
    type = 'text',
    memorySpace = 5,
    vertical = false,
    selectMenu = [],
    ellipsis = false,
    contentStyle = {},
    isSelect = false,
    tips,
    counter = false,
    autosize = false,
    clearable = false,
    autocomplete = 'off',
    showPassword = false,
    showWordLimit = false,
    showTitle = false,
    validateEvent = true,

    displayOnly = false,
    displayOnlyContent = '',
    customClass = '',
    frontClearIcon = false,
    showEmptyValue = false,
    textAlign = 'left',
    width
  } = props
  const defaultProps = {
    ...$props,
    ...props,
    _constants,
    name,
    size,
    form,
    label,
    height,
    resize,
    tabindex,
    disabled,
    readonly,
    hoverExpand,
    mask,
    suffixIcon,
    prefixIcon,
    modelValue,
    type,
    memorySpace,
    vertical,
    selectMenu,
    ellipsis,
    contentStyle,
    isSelect,
    tips,
    counter,
    autosize,
    clearable,
    autocomplete,
    showPassword,
    showWordLimit,
    showTitle,
    validateEvent,

    displayOnly,
    displayOnlyContent,
    customClass,
    frontClearIcon,
    showEmptyValue,
    textAlign,
    width
  }
  const prepend = useRef()
  const input = useRef()
  const prefix = useRef()
  const suffix = useRef()
  const append = useRef()
  const panel = useRef()
  const textarea = useRef()
  const { ref, current: vm, parent } = useVm()

  const {
    handleLeaveTextarea,
    handleEnterTextarea,
    handlePasswordVisible,
    clear,
    selectedMemory,
    handleChange,
    handleInput,
    state,
    emit,
    handleEnterDisplayOnlyContent,
    handleCompositionEnd,
    handleFocus,
    handleCompositionUpdate,
    handleBlur,
    handleCompositionStart,
    getSuffixVisible,
    a,
    isMemoryStorage,
    storageData
  } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    constants: _constants,
    doms: [prepend, input, prefix, suffix, append, panel, textarea]
  })
  const $attrs = a(props, define_props, false)

  return (
    <div
      className={vc([
        props.className,
        type === 'textarea' ? 'tiny-textarea' : 'tiny-input',
        state.inputSize ? 'tiny-input-' + state.inputSize : '',
        {
          'is-disabled': state.inputDisabled,
          'is-exceed': state.inputExceed,
          'tiny-input-group': defaultProps.slots.prepend || defaultProps.slots.append,
          'tiny-input-group-append': defaultProps.slots.append,
          'tiny-input-group-prepend': defaultProps.slots.prepend,
          'tiny-input-prefix': defaultProps.slots.prefix || prefixIcon,
          'tiny-input-suffix':
            defaultProps.slots.suffix || suffixIcon || clearable || showPassword || (mask && state.inputDisabled),
          'tiny-input-word-limit': state.isWordLimitVisible,
          'is-display-only': state.isDisplayOnly
        }
      ])}
      ref={ref}
      style={props.style}
      onMouseEnter={($event) => {
        state.hovering = true
        emit('mouseenter', $event)
      }}
      onMouseLeave={($event) => {
        state.hovering = false
        emit('mouseleave', $event)
      }}
      onClick={($event) => emit('click', $event)}>
      <If v-if={type !== 'textarea'}>
        {/* <!-- 前置元素 --> */}
        <If v-if={defaultProps.slots.prepend}>
          <div className="tiny-input-group__prepend" ref={prepend} v-ref="prepend">
            <Slot slots={defaultProps.slots} name="prepend"></Slot>
          </div>
        </If>

        <span className="tiny-input-display-only">
          <If v-if={state.isDisplayOnly}>
            <Tooltip
              effect="light"
              content={state.displayOnlyTooltip}
              display={type === 'password'}
              placement="top"
              onMouseEnter={handleEnterDisplayOnlyContent}>
              <If v-if={type === 'password'}>
                <span className="tiny-input-display-only__content">{state.hiddenPassword}</span>
              </If>
              <If v-if={type !== 'password' && mask}>
                <span className="tiny-input-display-only__mask">
                  <span className="tiny-input-display-only__mask-text">{state.displayedMaskValue}</span>
                  <Component
                    is={state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'}
                    onClick={(state.maskValueVisible = !state.maskValueVisible)}></Component>
                </span>
              </If>
              <If v-if={type !== 'password' && !mask}>
                <span className="tiny-input-display-only__content">{state.displayOnlyText}</span>
              </If>
            </Tooltip>
          </If>
          <If v-if={type !== 'textarea'}>
            <input
              ref={input}
              v-ref="input"
              name={name}
              data-tag="tiny-input-inner"
              {...a($attrs, ['type', 'className', 'style', '^onw+', 'id'])}
              className={vc([
                'tiny-input__inner',
                mask && state.inputDisabled && !state.maskValueVisible && 'tiny-input__mask'
              ])}
              tabIndex={tabindex}
              type={showPassword ? (state.passwordVisible ? 'text' : 'password') : type}
              disabled={state.inputDisabled}
              readOnly={readonly}
              unselectable={readonly ? 'on' : 'off'}
              autoComplete={autocomplete}
              onCompositionEnd={() => handleCompositionEnd}
              onCompositionUpdate={() => handleCompositionUpdate}
              onCompositionStart={() => handleCompositionStart}
              onBlur={() => handleBlur}
              onFocus={() => handleFocus}
              onInput={() => handleInput}
              onChange={() => handleChange}
              aria-label={label}
              onKeyUp={($event) => emit('keyup', $event)}
              onKeyDown={($event) => emit('keydown', $event)}
              onPaste={($event) => emit('paste', $event)}
            />
          </If>
        </span>
        {isMemoryStorage && (
          <TinyTallStorage
            name={name}
            localstorageData={storageData.value}
            iMemoryStorage={isMemoryStorage}
            onSelected={selectedMemory}></TinyTallStorage>
        )}

        {/* <!-- 前置内容 --> */}
        <If v-if={!state.isDisplayOnly && (defaultProps.slots.prefix || prefixIcon)}>
          <span className="tiny-input__prefix" ref={prefix} v-ref="prefix">
            <Slot name="prefix" slots={defaultProps.slots}></Slot>
            <Component v-if={prefixIcon} is={prefixIcon} className="tiny-svg-size tiny-input__icon" />
          </span>
        </If>

        {/* <!-- 后置内容 --> */}
        <div>
          <Transition
            name="tiny-transition-icon-out-in"
            className="tiny-input__suffix"
            v-if={!state.isDisplayOnly && getSuffixVisible()}>
            <span ref="suffix">
              <span className="tiny-input__suffix-inner">
                {/* <!-- 清除按钮前置 --> */}
                <If v-if={frontClearIcon && state.showClear}>
                  <IconClose
                    className="tiny-svg-size tiny-input__icon tiny-input__clear"
                    onMouseDown={(e) => handlePrevent(e, () => '')}
                    onClick={clear}></IconClose>
                </If>

                <If v-if={!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible}>
                  <Slot slots={defaultProps.slots} name="suffix"></Slot>
                  <Component v-if={suffixIcon} is={suffixIcon} className="tiny-svg-size tiny-input__icon" />
                </If>
                {/* <!-- 清除按钮后置 --> */}

                <If v-if={frontClearIcon && state.showClear}>
                  <IconClose
                    className="tiny-svg-size tiny-input__icon tiny-input__clear"
                    onMouseDown={(e) => handlePrevent(e, () => '')}
                    onClick={clear}></IconClose>
                </If>
                <Component
                  v-if={showPassword}
                  is={state.passwordVisible ? 'icon-eyeopen' : 'icon-eyeclose'}
                  className="tiny-svg-size tiny-input__icon"
                  onClick={handlePasswordVisible}></Component>
                <Component
                  v-if={mask && state.inputDisabled}
                  is={state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'}
                  className="tiny-svg-size tiny-input__icon"
                  onClick={(state.maskValueVisible = !state.maskValueVisible)}></Component>
                <If v-if={state.isWordLimitVisible}>
                  <span className="tiny-input__count">
                    <span className="tiny-input__count-inner">
                      <span className="tiny-input__count-text-length">
                        {state.showWordLimit ? `${state.textLength}` : ''}
                      </span>
                      <span className="tiny-input__count-upper-limit">
                        {state.showWordLimit ? `/${state.upperLimit}` : state.textLength}
                      </span>
                    </span>
                  </span>
                </If>
              </span>
              <If v-if={state.validateState}>
                <i className={vc(['tiny-input__icon', 'tiny-input__validateIcon', state.validateIcon])}></i>
              </If>
            </span>
          </Transition>
        </div>
        {/* <!-- 后置元素 --> */}
        <If If v-if={defaultProps.slots.append}>
          <div className="tiny-input-group__append" ref={append} v-ref="append">
            <Slot name="append" slots={props.slot}></Slot>
          </div>
        </If>
        {/* <!-- Panel弹窗（例如时间组件的非范围选择窗口） --> */}
        <If If v-if={defaultProps.slots.panel}>
          <div className="tiny-input-group__panel" ref={panel} v-ref="panel">
            <Slot name="panel" slots={defaultProps.slots}></Slot>
          </div>
        </If>
      </If>
      <If v-if={type === 'textarea'}>
        <span
          className={vc([
            autosize ? 'tiny-textarea-autosize-display-only' : 'tiny-textarea-display-only',
            hoverExpand && 'tiny-textarea__inner-con'
          ])}>
          <If v-if={state.isDisplayOnly}>
            <Tooltip
              effect="light"
              content={state.displayOnlyTooltip}
              placement="top"
              onMouseEnter={($event) => handleEnterDisplayOnlyContent($event, 'textarea')}>
              <span className="tiny-textarea-display-only__content">{state.displayOnlyText}</span>
            </Tooltip>
          </If>

          <textarea
            ref={textarea}
            v-ref="textarea"
            {...a($attrs, ['type', 'className', 'style', 'id'])}
            tabindex={tabindex}
            className={vc([
              'tiny-textarea__inner',
              hoverExpand && !state.enteredTextarea && 'tiny-textarea__fix-height'
            ])}
            onCompositionStart={() => handleCompositionStart}
            onCompositionUpdate={() => handleCompositionUpdate}
            onCompositionEnd={() => handleCompositionEnd}
            onInput={() => handleInput}
            disabled={state.inputDisabled}
            readOnly={readonly}
            unselectable={readonly ? 'on' : 'off'}
            autoComplete={autocomplete}
            style={state.textareaStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onMouseEnter={(event) => handleEnterTextarea(event)}
            onMouseLeave={(event) => handleLeaveTextarea(event)}
            aria-label={label}
            onKeyUp={($event) => emit('keyup', $event)}
            onKeyDown={($event) => emit('keydown', $event)}
            onPaste={($event) => emit('paste', $event)}></textarea>
        </span>
      </If>
      <If v-if={state.isWordLimitVisible && type === 'textarea'}>
        <span className="tiny-input__count">
          <span className="tiny-input__count-inner">
            <span className="tiny-input__count-text-length">{state.showWordLimit ? `${state.textLength}` : ''}</span>
            <span className="tiny-input__count-upper-limit">
              {state.showWordLimit ? `/${state.upperLimit}` : state.textLength}
            </span>
          </span>
        </span>
      </If>

      <Slot slots={defaultProps.slots} children={props.children}></Slot>
    </div>
  )
}
