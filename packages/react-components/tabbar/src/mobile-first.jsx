
    import { renderless, api } from '@opentiny/vue-renderless/tabbar/vue'
    import '@opentiny/vue-theme/tabbar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tabbar(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const tabbar=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tabbar]
      })
      return (
          
<div data-tag="tiny-tabbar"  ref={tabbar} v-ref="tabbar" className={vc([
      'z-10 flex box-content w-full h-14 bg-color-bg-1 fixed bottom-0 left-0',
      { 'border-t border-color-border border-solid': border },
      { unfit: !state.fit }
    ])}>    
<Slot  parent_children={props.children} slots={props.slots}>      

  {
    itemList.map((item, index)=>(
      <tabbarItem  key={index} item></tabbarItem>
    ))
  }
  

    </Slot>

  </div>


      );
    }
    