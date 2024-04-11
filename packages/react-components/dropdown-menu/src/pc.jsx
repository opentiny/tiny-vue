
    import { renderless, api } from '@opentiny/vue-renderless/dropdown-menu/vue'
    import '@opentiny/vue-theme/dropdown-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dropdownMenu(props) {
      const {visibleArrow,arrowOffset,placement,popperClass,popperAppendToBody,checkedStatus,//,tiny,新增,textField,options} = props
      const defaultProps = {
        ...$props,
        ...props,
        visibleArrow,arrowOffset,placement,popperClass,popperAppendToBody,checkedStatus,//,tiny,新增,textField,options
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,doDestroy,handleMouseenter,handleMouseleave } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<transition name="tiny-zoom-in-top" onAfter={doDestroy}>    
<ul   style={{display:state.showPopper?'block':'none'}} onMouseenter={handleMouseenter} onMouseleave={handleMouseleave} className={vc([state.size && `tiny-dropdown-menu--${state.size}`, popperClass],'tiny-dropdown-menu tiny-popper')}>      
<Slot selected-index={state.selectedIndex} parent_children={props.children} slots={props.slots}>        

  {
    options.map((item, index)=>(
      <tinyDropdown  item-data={item} label={item[textField]} key={index} icon={item.icon} disabled={item.disabled} divided={item.divided} tip={item.tip} tip-position={item.tipPosition}>        </tinyDropdown>
    ))
  }
  

      </Slot>

    </ul>

  </transition>


      );
    }
    