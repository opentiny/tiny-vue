
    import { renderless, api } from '@opentiny/vue-renderless/numeric/vue'
    import '@opentiny/vue-theme/numeric/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function numeric(props) {
      const {step,stepStrictly,max,min,modelValue,disabled,size,controls,controlsPosition,name,label,placeholder,precision,circulate,theme,changeCompat} = props
      const defaultProps = {
        ...$props,
        ...props,
        step,stepStrictly,max,min,modelValue,disabled,size,controls,controlsPosition,name,label,placeholder,precision,circulate,theme,changeCompat
      }
      const { ref, current: vm, parent } = useVm()
      const input=useRef()
      const { state,mouseEvent,decrease,increase,handleBlur,handleFocus,handleInput,handleInputChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[input]
      })
      return (
          
<div   onMousewheel={mouseEvent} className={vc([
      'tiny-mobile-numeric',
      state.inputSize ? 'tiny-mobile-numeric--' + state.inputSize : '',
      { 'is-disabled': state.inputDisabled },
      { 'is-without-controls': !controls },
      { 'is-controls-right': state.controlsAtRight },
      { 'is-round': theme === 'round' }
    ])}>    
<span  role="button" style={{display:controls?'block':'none'}} repeat-click  onKeydown={decrease} className={vc({ 'is-disabled': state.minDisabled },'tiny-mobile-numeric__decrease')}>      
<Component is={state.controlsAtRight ? 'icon-chevron-down' : 'icon-minus'}></Component>

    </span>

    
<span  role="button" style={{display:controls?'block':'none'}} repeat-click  onKeydown={increase} className={vc({ 'is-disabled': state.maxDisabled },'tiny-mobile-numeric__increase')}>      
<Component is={state.controlsAtRight ? 'icon-chevron-up' : 'icon-plus'}></Component>

    </span>

    
<div  className={vc([
        'tiny-mobile-numeric__input',
        state.inputSize ? `tiny-input-${state.inputSize}` : '',
        state.inputDisabled ? 'is-disabled' : ''
      ])}>      
<input  ref={input} v-ref="input" value={state.displayValue} placeholder={placeholder} max={max} min={min} name={name} aria-label={label} onKeydown={increase} onKeydown={decrease} onBlur={handleBlur} onFocus={handleFocus} onInput={handleInput} onChange={handleInputChange} className="tiny-mobile-numeric__input-inner"></input>

    </div>

  </div>


      );
    }
    