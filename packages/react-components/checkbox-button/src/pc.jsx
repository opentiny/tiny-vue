
    import { renderless, api } from '@opentiny/vue-renderless/checkbox-button/vue'
    import '@opentiny/vue-theme/checkbox-button/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function checkboxButton(props) {
      const {modelValue,label,text,events,disabled,checked,name,trueLabel,falseLabel} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,label,text,events,disabled,checked,name,trueLabel,falseLabel
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
          
<label   role="checkbox" aria-checked={state.isChecked} aria-disabled={state.isDisabled} className={vc([
      state.size ? 'tiny-checkbox-button--' + state.size : '',
      { 'is-disabled': state.isDisabled },
      { 'is-checked': state.isChecked },
      { 'is-focus': state.focus }
    ],'tiny-checkbox-button')}>    
<input style={{display:trueLabel || falseLabel?'block':'none'}}  type="checkbox" name={name} disabled={state.isDisabled} true-value={trueLabel} false-value={falseLabel} value={state.model} onChange={(e)=>state.model = e.value} onChange={handleChange} onFocus={state.focus = true} onBlur={state.focus = false} className="tiny-checkbox-button__original"></input>

    
<input style={{display:!(trueLabel || falseLabel)?'block':'none'}}  type="checkbox" name={name} disabled={state.isDisabled} value={label} value={state.model} onChange={(e)=>state.model = e.value} onChange={handleChange} onFocus={state.focus = true} onBlur={state.focus = false} className="tiny-checkbox-button__original"></input>


    
<span style={{display:slots.default || state.isShowText?'block':'none'}}  style={state.isChecked ? state.activeStyle : null} className="tiny-checkbox-button__inner">      
<Slot  parent_children={props.children} slots={props.slots}>{state.showText}</Slot>

    </span>

  </label>


      );
    }
    