
    import { renderless, api } from '@opentiny/vue-renderless/rate/vue'
    import '@opentiny/vue-theme/rate/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function rate(props) {
      const {modelValue,radio,lowThreshold,highThreshold,max,colors,voidColor,disabledVoidColor,iconClasses,voidIconClass,disabledVoidIconClass,disabled,allowHalf,showText,showScore,textColor,texts,textOnBottom,type,scoreTemplate} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,radio,lowThreshold,highThreshold,max,colors,voidColor,disabledVoidColor,iconClasses,voidIconClass,disabledVoidIconClass,disabled,allowHalf,showText,showScore,textColor,texts,textOnBottom,type,scoreTemplate
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
          
<div data-tag="tiny-rate"  tabindex="0" onKeydown={handelKey} className={vc([m(gcls('rate')))}>    

  {
    max.map(item=>(
      <span data-tag="tiny-rate-content"  key={item}  onMousemove={setCurrentValue({ item, event: $event })} onMouseleave={resetCurrentValue} onClick={selectValue(item)} className={vc([
        m(
          gcls({ 'allowhalf-item': allowHalf }),
          gcls('rate-item'),
          gcls(disabled ? 'cursor-disabled' : 'cursor-undisabled'),
          gcls({ 'rate-item-textOnBottom': textOnBottom }),
          gcls({ 'type-big': type === 'large' })
        )
      )}>      
<Component is={state.classes[item - 1]} style={getIconStyle(item)}  className={vc([m(gcls({ 'svg-hover': state.hoverIndex === item })))}>      </Component>


      
<Component style={{display:showDecimalIcon(item)?'block':'none'}} is={state.decimalIconClass} style={state.decimalStyle}  className={vc([m(gcls({ 'allowhalf-active': allowHalf })))}></Component>

      
<div data-tag="tiny-rate-text-bottom" style={{display:textOnBottom && !radio?'block':'none'}} style={{ color: textColor }}  className={vc([m(gcls('text-Bottom'), gcls({ 'big-text-bottom': type === 'large' })))}>        
{texts[item - 1]}

      </div>

      
<div data-tag="tiny-rate-radio-bottom" style={{display:textOnBottom && radio?'block':'none'}} style={getTextStyle()}  className={vc([m(gcls('text-Bottom'), gcls({ 'big-text-bottom': type === 'large' })))}>        
{texts[item - 1]}

      </div>

    </span>
    ))
  }
  

    
<span data-tag="tiny-rate-score" style={{display:(!textOnBottom && showText) || showScore?'block':'none'}} style={{ color: textColor }}  className={vc([m(gcls('text-left'), gcls({ 'big-text-left': type === 'large' })))}>{state.text}</span>

  </div>


      );
    }
    