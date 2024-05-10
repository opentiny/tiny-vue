
    import { renderless, api } from '@opentiny/vue-renderless/rate/vue'
    import '@opentiny/vue-theme/rate/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function rate(props) {
      const {modelValue,radio,lowThreshold,highThreshold,max,colors,voidColor,disabledVoidColor,iconClasses,voidIconClass,disabledVoidIconClass,disabled,allowHalf,showText,showScore,textColor,texts,textOnBottom,space,size,scoreTemplate} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,radio,lowThreshold,highThreshold,max,colors,voidColor,disabledVoidColor,iconClasses,voidIconClass,disabledVoidIconClass,disabled,allowHalf,showText,showScore,textColor,texts,textOnBottom,space,size,scoreTemplate
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handelKey,setCurrentValue,resetCurrentValue,selectValue } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  tabindex="0" onKeydown={handelKey} className="tiny-rate">    

  {
    max.map(item=>(
      <span  key={item} style={{ width: space, cursor: disabled ? 'auto' : 'pointer' }}  onMousemove={setCurrentValue({ item, event: $event })} onMouseleave={resetCurrentValue} onClick={selectValue(item)} className="tiny-rate__star">      
<Component is={state.classes[item - 1]} style={getIconStyle(item)}  className={vc([
          'tiny-svg-size',
          'tiny-rate__icon',
          { hover: state.hoverIndex === item },
          disabled ? 'disabled' : '',
          showDecimalIcon(item) ? 'ratehalf' : ''
        ])}>      </Component>

      
<Component style={{display:showDecimalIcon(item)?'block':'none'}} is={state.decimalIconClass} style={state.decimalStyle}  className="tiny-svg-size tiny-rate__decimal"></Component>

      
<div style={{display:textOnBottom && !radio?'block':'none'}} style={{ color: textColor }}  className="tiny-rate__bottom-text">        
{texts[item - 1]}

      </div>

      
<div style={{display:textOnBottom && radio?'block':'none'}} style={getTextStyle()}  className="tiny-rate__bottom-text">        
{texts[item - 1]}

      </div>

    </span>
    ))
  }
  

    
<span style={{display:(!textOnBottom && showText) || showScore?'block':'none'}} style={{ color: textColor }}  className="tiny-rate__text">{state.text}</span>

  </div>


      );
    }
    