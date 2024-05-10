
    import { renderless, api } from '@opentiny/vue-renderless/numeric/vue'
    import '@opentiny/vue-theme/numeric/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function numeric(props) {
      const {step,tabindex,stepStrictly,max,min,modelValue,disabled,size,controls,controlsPosition,name,label,placeholder,precision,circulate,mouseWheel,validateEvent,allowEmpty,format,unit,stringMode,holdZero,plugin,modelTruncation,strictInput,hideUnit,unitCenter,displayOnly,changeCompat} = props
      const defaultProps = {
        ...$props,
        ...props,
        step,tabindex,stepStrictly,max,min,modelValue,disabled,size,controls,controlsPosition,name,label,placeholder,precision,circulate,mouseWheel,validateEvent,allowEmpty,format,unit,stringMode,holdZero,plugin,modelTruncation,strictInput,hideUnit,unitCenter,displayOnly,changeCompat
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
          
<div  data-tag="tiny-numeric"  className={vc([state.isDisplayOnly ? '' : 'flex items-center','w-auto]')}>    
<div data-tag="tiny-numeric-main"   onMousewheel={mouseEvent} className={vc([
        m(
          gcls('numeric'),
          state.inputSize === 'medium' ? gcls('numeric_medium') : gcls('numeric_size'),
          state.inputDisabled ? gcls('numeric_input-disabled') : gcls('numeric_input-active'),
          state.isDisplayOnly ? gcls('numeric_display_none') : ''
        )
      )}>      
<span data-tag="tiny-numeric-decrease"  style={{display:controls?'block':'none'}} role="button" repeat-click onKeydown={decrease} className={vc([
          m(
            gcls('numeric_decrease'),
            state.inputSize === 'medium' ? gcls('numeric_svg_medium') : gcls('numeric_svg_size'),
            state.minDisabled || state.inputDisabled ? gcls('numeric_crease_disabled') : ''
          )
        )}>        
<Component is={state.controlsAtRight ? 'icon-chevron-down' : 'icon-minus'}  className={vc([m(state.minDisabled || state.inputDisabled ? gcls('numeric_svg_disabled') : gcls('numeric_svg')))}></Component>

      </span>

      
<div data-tag="tiny-numeric-controls"  style={{display:controls?'block':'none'}} className={vc([
          'sm:w-px sm:h-4 sm:bg-color-text-disabled sm:absolute',
          state.inputSize === 'medium' ? 'sm:left-8' : 'sm:left-7'
        ])}></div>

      
<span data-tag="numeric-increase"  style={{display:controls?'block':'none'}} role="button" repeat-click onKeydown={increase} className={vc([
          m(
            gcls('numeric_increase'),
            state.inputSize === 'medium' ? gcls('numeric_svg_medium') : gcls('numeric_svg_size'),
            state.minDisabled || state.inputDisabled ? gcls('numeric_crease_disabled') : ''
          )
        )}>        
<Component is={state.controlsAtRight ? 'icon-chevron-up' : 'icon-plus'}  className={vc([state.maxDisabled || state.inputDisabled ? gcls('numeric_svg_disabled') : gcls('numeric_svg'))}></Component>

      </span>

      
<div data-tag="tiny-numeric-controls"  style={{display:controls?'block':'none'}} className={vc([
          'sm:w-px sm:h-4 sm:bg-color-text-disabled sm:absolute',
          state.inputSize === 'medium' ? 'sm:right-8' : 'sm:right-7'
        ])}></div>

      
<div  className={vc([
          m(gcls(`numeric_input-${state.inputSize === 'medium' ? 'medium' : 'default'}-${controls ? 'num' : 'unit'}`))
        )}>        
<input tabindex={tabindex}  disabled={state.inputDisabled} ref={input} v-ref="input" value={state.displayValue} placeholder={placeholder} max={max} min={min} name={name} aria-label={label} onKeydown={increase} onKeydown={decrease} onBlur={handleBlur} onFocus={handleFocus} onInput={handleInput} onChange={handleInputChange} className={vc([
            m(
              gcls('numeric_input_inner'),
              gcls(`numeric-text-${controls ? 'center' : 'left'}`),
              state.inputSize === 'medium' ? gcls('numeric_input_inner_medium') : gcls('numeric_input_inner_size'),
              state.inputDisabled ? gcls('numeric_input_inner_disabled') : gcls('numeric_input_inner_default')
            )
          )}></input>

      </div>

    </div>

    
<div data-tag="numeric-display-only" style={{display:state.isDisplayOnly?'block':'none'}}   className={vc([state.inputSize === 'medium' ? 'text-sm' : 'text-xs','sm:leading-normal text-color-text-primary]')}>      
<span >{state.displayValue}</span>
<span style={{display:unit && !hideUnit?'block':'none'}}  className="ml-2">{unit}</span>

    </div>

    
<div style={{display:unit && !hideUnit && !state.isDisplayOnly?'block':'none'}} data-tag="numeric-unit"  className={vc(['h-0 right-0 flex text-xs items-center shrink-0', unit ? 'ml-2' : ''])}>      
{unit}

    </div>

  </div>


      );
    }
    