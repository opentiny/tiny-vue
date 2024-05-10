
    import { renderless, api } from '@opentiny/vue-renderless/checkbox/vue'
    import '@opentiny/vue-theme/checkbox/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function checkbox(props) {
      const {modelValue,text,events,label,indeterminate,disabled,checked,name,trueLabel,falseLabel,id,iconPosition} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,text,events,label,indeterminate,disabled,checked,name,trueLabel,falseLabel,id,iconPosition
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<label   id={id} className={vc({
      'is-disabled': state.isDisabled,
      'is-checked': state.isChecked,
      'is-indeterminate': indeterminate,
      'is-focus': state.focus,
      'icon-position-top': state.iconPosition === 'top'
    },'tiny-mobile-checkbox')}>    
<span  tabindex={indeterminate ? 0 : false} role={indeterminate ? 'checkbox' : false} aria-checked={indeterminate ? 'mixed' : false} className="tiny-mobile-checkbox__input">      
<span  className="tiny-mobile-checkbox__inner"></span>

      
<input style={{display:trueLabel || falseLabel?'block':'none'}}  type="checkbox" aria-hidden={indeterminate ? 'true' : 'false'} name={name} disabled={state.isDisabled} true-value={trueLabel} false-value={falseLabel} value={state.model} onChange={(e)=>state.model = e.value} onChange={handleChange} onFocus={state.focus = true} onBlur={state.focus = false} className="tiny-mobile-checkbox__original"></input>

      
<input style={{display:!(trueLabel || falseLabel)?'block':'none'}}  type="checkbox" aria-hidden={indeterminate ? 'true' : 'false'} disabled={state.isDisabled} value={label} name={name} value={state.model} onChange={(e)=>state.model = e.value} onChange={handleChange} onFocus={state.focus = true} onBlur={state.focus = false} className="tiny-mobile-checkbox__original"></input>

    </span>

    
<span style={{display:(slots.default && slots.default()) || state.isShowText?'block':'none'}}  className="tiny-mobile-checkbox__label">      
<Slot  parent_children={props.children} slots={props.slots}>{state.showText}</Slot>

    </span>

  </label>


      );
    }
    