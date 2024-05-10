
    import { renderless, api } from '@opentiny/vue-renderless/numeric/vue'
    import '@opentiny/vue-theme/numeric/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function numeric(props) {
      const {step,tabindex,stepStrictly,max,min,modelValue,disabled,size,controls,controlsPosition,name,label,placeholder,precision,circulate,mouseWheel,validateEvent,allowEmpty,format,unit,stringMode,holdZero,plugin,modelTruncation,strictInput,hideUnit,unitCenter,displayOnly,showLeft,showEmptyValue,title,shape,tip,clearable,filter,blank,changeCompat} = props
      const defaultProps = {
        ...$props,
        ...props,
        step,tabindex,stepStrictly,max,min,modelValue,disabled,size,controls,controlsPosition,name,label,placeholder,precision,circulate,mouseWheel,validateEvent,allowEmpty,format,unit,stringMode,holdZero,plugin,modelTruncation,strictInput,hideUnit,unitCenter,displayOnly,showLeft,showEmptyValue,title,shape,tip,clearable,filter,blank,changeCompat
      }
      const { ref, current: vm, parent } = useVm()
      const filterPanel=useRef()
const input=useRef()
      const { state,mouseEvent,handleClear,handleChange,decrease,increase,handleBlur,handleFocus,handleInput,handleInputChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[filterPanel,input]
      })
      return (
          
<div   onMousewheel={mouseEvent} className={vc([
      'tiny-numeric',
      state.inputSize ? 'tiny-numeric--' + state.inputSize : '',
      { 'is-disabled': state.inputDisabled },
      { 'is-without-controls': !controls || (unit && hideUnit) },
      { 'is-controls-right': state.controlsAtRight },
      { 'is-display-only': state.isDisplayOnly }
    ])}>    
<div style={{display:shape === 'filter'?'block':'none'}}>      
<tinyFilter ref={filterPanel} v-ref="filterPanel" label={title} value={state.filterValue} tip={tip} disabled={disabled} clearable={clearable} onHandle={handleClear} blank={blank}>        
<div  style={{display:shape === 'filter' && filter?'block':'none'}} className="tiny-numeric__popover-filter-content">          
<tinyRadio value={state.radioVal} onChange={(e)=>state.radioVal = e.value} onChange={handleChange}>            

  {
    state.filterMenu.map((item, index)=>(
      <tinyRadio  key={index} label={t(item)}  className="popover-filter-botton">              
<tinyTag size="mini">{t(item)}</tinyTag>

            </tinyRadio>
    ))
  }
  

          </tinyRadio>

        </div>

        
<div data-tag="tiny-numeric-filter"   onMousewheel={mouseEvent} className={vc([
            'tiny-numeric',
            state.inputSize ? 'tiny-numeric--' + state.inputSize : '',
            { 'is-disabled': state.inputDisabled },
            { 'is-without-controls': !state.controls || (unit && hideUnit) },
            { 'is-controls-right': state.controlsAtRight },
            { 'is-display-only': state.isDisplayOnly },
            { 'is-filter': shape === 'filter' }
          ])}>          
<span  role="button" style={{display:state.controls && !unit?'block':'none'}} repeat-click  onKeydown={decrease} className={vc({ 'is-disabled': state.minDisabled },'tiny-numeric__decrease')}>            
<Component is={state.controlsAtRight ? 'icon-chevron-down' : 'icon-minus'}  className="tiny-svg-size"></Component>

          </span>

          
<span  role="button" style={{display:state.controls && !unit?'block':'none'}} repeat-click  onKeydown={increase} className={vc({ 'is-disabled': state.maxDisabled },'tiny-numeric__increase')}>            
<Component is={state.controlsAtRight ? 'icon-chevron-up' : 'icon-plus'}  className="tiny-svg-size"></Component>

          </span>

          
<div  style={{display:unit && !hideUnit?'block':'none'}} className="tiny-numeric__unit">            
{unit}

          </div>

          
<div  className={vc([
              'tiny-numeric__input',
              { 'tiny-numeric__read-only': state.isDisplayOnly },
              state.inputSize ? `tiny-input-${state.inputSize}` : '',
              state.inputDisabled ? 'is-disabled' : '',
              { 'has-unit': unit && !hideUnit },
              { 'text-align-left': unit && !unitCenter },
              { 'tiny-numeric__controls-position': controlsPosition }
            ])}>            
<span  className="tiny-numeric-display-only">              
<span  style={{display:state.isDisplayOnly?'block':'none'}} className="tiny-numeric-display-only__content">                
<span  className="tiny-numeric-display-only__value">{state.displayOnlyText}</span>

                
<span  style={{display:unit && !hideUnit && state.currentValue?'block':'none'}} className="tiny-numeric-display-only__unit">{unit}</span>

                
<span style={{display:!(unit && !hideUnit && state.currentValue)?'block':'none'}}>{unit}</span>

              </span>

              
<input tabindex={tabindex}  ref={input} v-ref="input" value={state.displayValue} placeholder={placeholder} max={max} min={min} name={name} aria-label={label} onKeydown={increase} onKeydown={decrease} onBlur={handleBlur} onFocus={handleFocus} onInput={handleInput} onChange={handleInputChange} className={vc([
                  'tiny-numeric__input-inner',
                  { 'tiny-numeric__show-left': !state.controls && (showLeft || shape === 'filter') }
                ])}></input>

            </span>

          </div>

        </div>

      </tinyFilter>

    </div>

    
<div style={{display:!(!(unit && !hideUnit && state.currentValue))?'block':'none'}} data-tag="tiny-numeric-base"  className="tiny-numeric-base">      
<span  role="button" style={{display:controls && !unit?'block':'none'}} repeat-click  onKeydown={decrease} className={vc({ 'is-disabled': state.minDisabled },'tiny-numeric__decrease')}>        
<Component is={state.controlsAtRight ? 'icon-chevron-down' : 'icon-minus'}  className="tiny-svg-size"></Component>

      </span>

      
<span  role="button" style={{display:controls && !unit?'block':'none'}} repeat-click  onKeydown={increase} className={vc({ 'is-disabled': state.maxDisabled },'tiny-numeric__increase')}>        
<Component is={state.controlsAtRight ? 'icon-chevron-up' : 'icon-plus'}  className="tiny-svg-size"></Component>

      </span>

      
<div  style={{display:unit && !hideUnit?'block':'none'}} className="tiny-numeric__unit">        
{unit}

      </div>

      
<div  className={vc([
          'tiny-numeric__input',
          { 'tiny-numeric__read-only': state.isDisplayOnly },
          state.inputSize ? `tiny-input-${state.inputSize}` : '',
          state.inputDisabled ? 'is-disabled' : '',
          { 'has-unit': unit && !hideUnit },
          { 'text-align-left': unit && !unitCenter },
          { 'tiny-numeric__controls-position': controlsPosition }
        ])}>        
<span  className="tiny-numeric-display-only">          
<span  style={{display:state.isDisplayOnly?'block':'none'}} className="tiny-numeric-display-only__content">            
<span  className="tiny-numeric-display-only__value">{state.displayOnlyText}</span>

            
<span  style={{display:unit && !hideUnit && state.currentValue?'block':'none'}} className="tiny-numeric-display-only__unit">{unit}</span>

            
<span style={{display:!(unit && !hideUnit && state.currentValue)?'block':'none'}}>{unit}</span>

          </span>

          
<input tabindex={tabindex}  ref={input} v-ref="input" value={state.displayValue} placeholder={placeholder} max={max} min={min} name={name} aria-label={label} onKeydown={increase} onKeydown={decrease} onBlur={handleBlur} onFocus={handleFocus} onInput={handleInput} onChange={handleInputChange} className={vc(['tiny-numeric__input-inner', { 'tiny-numeric__show-left': !controls && showLeft }])}></input>

        </span>

      </div>

    </div>

  </div>


      );
    }
    