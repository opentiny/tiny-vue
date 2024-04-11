
    import { renderless, api } from '@opentiny/vue-renderless/checkbox/vue'
    import '@opentiny/vue-theme/checkbox/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function checkbox(props) {
      const {modelValue,text,events,label,indeterminate,disabled,checked,name,trueLabel,falseLabel,id,controls,size,border,validateEvent,displayOnly,shape} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,text,events,label,indeterminate,disabled,checked,name,trueLabel,falseLabel,id,controls,size,border,validateEvent,displayOnly,shape
      }
      const { ref, current: vm, parent } = useVm()
      const tooltip=useRef()
      const { state,handleChange,handleLabelMouseenter,handleMouseleave } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tooltip]
      })
      return (
          
<label   id={id} tabindex="-1" a($attrs, ['class', 'style', 'onClick'], true) className={vc([
      border && state.checkboxSize ? 'tiny-checkbox--' + state.checkboxSize : '',
      { 'is-disabled': state.isDisabled || state.isDisplayOnly },
      { 'is-bordered': border },
      { 'is-checked': state.isChecked },
      { 'is-group-display-only': state.isGroupDisplayOnly },
      { 'is-display-only': state.isDisplayOnly },
      { 'is-filter': state.shape === 'filter' }
    ],'tiny-checkbox')}>    
<span   role={indeterminate ? 'checkbox' : undefined} aria-checked={indeterminate ? 'mixed' : false} className={vc({
        'is-disabled': state.isDisabled || state.isDisplayOnly,
        'is-checked': state.isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': state.focus
      },'tiny-checkbox__input')}>      
<span  tabindex="1" className="tiny-checkbox__inner">        
<iconHalfselect style={{display:indeterminate && state.shape !== 'filter'?'block':'none'}}  className="tiny-svg-size icon-halfselect"></iconHalfselect>

        
<iconChecked style={{display:!(indeterminate && state.shape !== 'filter')?'block':'none'}}  className="tiny-svg-size icon-checked-sur"></iconChecked>

        
<iconCheck style={{display:!(!(indeterminate && state.shape !== 'filter'))?'block':'none'}}  className="tiny-svg-size icon-check"></iconCheck>

      </span>

      
<input style={{display:trueLabel || falseLabel?'block':'none'}}  type="checkbox" aria-hidden={indeterminate ? 'true' : 'false'} name={name} disabled={state.isDisabled || state.isDisplayOnly} true-value={trueLabel} false-value={falseLabel} value={state.model} onChange={(e)=>state.model = e.value} onChange={handleChange} onFocus={state.focus = true} onBlur={state.focus = false}  className="tiny-checkbox__original"></input>

      
<input style={{display:!(trueLabel || falseLabel)?'block':'none'}}  type="checkbox" aria-hidden={indeterminate ? 'true' : 'false'} disabled={state.isDisabled || state.isDisplayOnly} value={label} name={name} value={state.model} onChange={(e)=>state.model = e.value} onChange={handleChange} onFocus={state.focus = true} onBlur={state.focus = false}  className="tiny-checkbox__original"></input>

    </span>

    
<span style={{display:(slots.default && slots.default()) || state.isShowText?'block':'none'}}  onMouseenter={handleLabelMouseenter} onMouseleave={handleMouseleave} className="tiny-checkbox__label tiny-checkbox-display-only">      
<Slot  parent_children={props.children} slots={props.slots}>{state.showText}</Slot>

      
<tinyTooltip ref={tooltip} v-ref="tooltip" value={state.tooltipVisible} onChange={(e)=>state.tooltipVisible = e.value} manual={true} effect="light" content={state.displayedValue} placement="top">      </tinyTooltip>

    </span>

  </label>


      );
    }
    