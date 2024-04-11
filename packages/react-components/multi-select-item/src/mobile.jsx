
    import { renderless, api } from '@opentiny/vue-renderless/multi-select-item/vue'
    import '@opentiny/vue-theme/multi-select-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function multiSelect(props) {
      const {option,divided} = props
      const defaultProps = {
        ...$props,
        ...props,
        option,divided
      }
      const { ref, current: vm, parent } = useVm()
      const multiSelectItem=useRef()
      const { state,handleClick,toggleExpand } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[multiSelectItem]
      })
      return (
          
<div   ref={multiSelectItem} v-ref="multiSelectItem" onClick={handleClick}  aria-disabled={option.disabled} tabindex={option.disabled ? null : -1} className={vc({
      'is-active': option.active,
      'is-disabled': option.disabled,
      'tiny-mobile-multi-select-item--divided': divided,
      'has-children': option.children?.length
    },'tiny-mobile-multi-select-item')}>    
<div  className="tiny-mobile-multi-select-item__wrap">      
<div  className="tiny-mobile-multi-select-item__content">        

  {
    option.level.map(i=>(
      <span  key={i}  className="tiny-mobile-multi-select-item__content-indent"></span>
    ))
  }
  

        
<Component style={{display:option.icon?'block':'none'}} is={option.icon}  className="tiny-svg-size"></Component>

        
<Slot item-data={option} parent_children={props.children} slots={props.slots}>          
<span >{option.label}</span>

        </Slot>

      </div>

      
<span style={{display:option.hasChild?'block':'none'}}  style={{
          transform: option.expanded && !slots.suffix ? 'rotate(180deg)' : 'none'
        }} onClick={toggleExpand} className={vc(['tiny-mobile-multi-select-item__suffix-icon'])}>        
<Slot name="suffix" parent_children={props.children} slots={props.slots}>          
<IconChevronDown ></IconChevronDown>

        </Slot>

      </span>

    </div>

  </div>


      );
    }
    