
    import { renderless, api } from '@opentiny/vue-renderless/option/vue'
    import '@opentiny/vue-theme/option/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function option(props) {
      const {value,label,created,disabled,events,visible,highlightClass,required,icon} = props
      const defaultProps = {
        ...$props,
        ...props,
        value,label,created,disabled,events,visible,highlightClass,required,icon
      }
      const { ref, current: vm, parent } = useVm()
      const option=useRef()
      const { state,hoverItem,selectOptionClick, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[option]
      })
      return (
          
<li ref={option} v-ref="option" onMouseenter={hoverItem} onClick={selectOptionClick} onMousedown={} data-tag="tiny-option" data-index={state.index}  style={{display:visible && state.visible?'block':'none'}}  className={vc([
      {
        selected: state.itemSelected,
        'is-disabled': disabled || state.groupDisabled || state.limitReached,
        hover: state.hover && !state.limitReached,
        'is-required': required
      },
      highlightClass
    ],'tiny-option tiny-select-dropdown__item')}>    
<span style={{display:state.select.multiple?'block':'none'}}  className="tiny-option__checkbox-wrap tiny-select-dropdown__item-checkbox">      


      


      
<tinyCheckbox model-value={state.itemSelected} disabled={disabled || state.groupDisabled || state.limitReached}>      </tinyCheckbox>

    </span>

    
<Component style={{display:icon?'block':'none'}} is={icon}  className="tiny-option__icon"></Component>

    
<div   className={vc([state.select.multiple ? 'calc-width' : 'full-width','tiny-option-wrapper]')}>      
<Slot  parent_children={props.children} slots={props.slots}>        
<span  title={state.showTitle ? state.currentLabel : ''} className="tiny-option-label">{state.currentLabel}</span>

      </Slot>

    </div>

  </li>


      );
    }
    