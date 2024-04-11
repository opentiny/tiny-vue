
    import { renderless, api } from '@opentiny/vue-renderless/radio/vue'
    import '@opentiny/vue-theme/radio/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function radio(props) {
      const {modelValue,events,label,text,disabled,name} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,events,label,text,disabled,name
      }
      const { ref, current: vm, parent } = useVm()
      const radio=useRef()
      const { state,handleChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[radio]
      })
      return (
          
<label   role="radio" aria-checked={state.model === label} aria-disabled={state.isDisabled} tabindex={state.tabIndex} onKeydown={state.model = state.isDisabled ? state.model : label} className={vc([{ 'is-disabled': state.isDisabled }, { 'is-focus': state.focus }, { 'is-checked': state.model === label }],'tiny-mobile-radio')}>    
<div  className="tiny-mobile-radio__input">      
<div  className="tiny-mobile-radio__outer">        
<div  className="tiny-mobile-radio__inner"></div>

      </div>


      
<input ref={radio} v-ref="radio"  value={label} type="radio" aria-hidden="true" value={state.model} onChange={(e)=>state.model = e.value} onFocus={state.focus = true} onBlur={state.focus = false} onChange={handleChange} name={name} disabled={state.isDisabled} tabindex="-1" className="tiny-mobile-radio__original"></input>

    </div>

    
<span   className="tiny-mobile-radio__label">      
<Slot  parent_children={props.children} slots={props.slots}>{text || label}</Slot>

    </span>

  </label>


      );
    }
    