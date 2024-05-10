
    import { renderless, api } from '@opentiny/vue-renderless/radio/vue'
    import '@opentiny/vue-theme/radio/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function radio(props) {
      const {modelValue,events,label,text,disabled,name,border,size,tabindex,displayOnly} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,events,label,text,disabled,name,border,size,tabindex,displayOnly
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
          
<label style={{display:!state.isDisplayOnly || state.model === label?'block':'none'}}   role="radio" aria-checked={state.model === label} aria-disabled={state.isDisabled} tabindex="-1" onKeydown={state.model = state.isDisabled ? state.model : label} a($attrs, ['class', 'style'], true) className={vc([
      border && state.radioSize ? 'tiny-radio--' + state.radioSize : '',
      { 'is-disabled': state.isDisabled },
      { 'is-focus': state.focus },
      { 'is-bordered': border },
      { 'is-checked': state.model === label },
      { 'is-display-only': state.isDisplayOnly }
    ],'tiny-radio')}>    
<span   className={vc({
        'is-disabled': state.isDisabled,
        'is-checked': state.model === label
      },'tiny-radio__input')}>      
<span  tabindex={tabindex} className="tiny-radio__inner"></span>

      
<input ref={radio} v-ref="radio"  value={label} type="radio" aria-hidden="true" value={state.model} onChange={(e)=>state.model = e.value} onFocus={state.focus = true} onBlur={state.focus = false} onChange={handleChange} name={name} disabled={state.isDisabled}  className="tiny-radio__original"></input>

    </span>

    
<span   className="tiny-radio__label">      
<Slot  parent_children={props.children} slots={props.slots}>{text || label}</Slot>

    </span>

  </label>


      );
    }
    