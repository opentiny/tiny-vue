
    import { renderless, api } from '@opentiny/vue-renderless/cascader-panel/vue'
    import '@opentiny/vue-theme/cascader-panel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderPanel(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleKeyDown } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  onKeydown={handleKeyDown} className={vc(['tiny-cascader-panel', border && 'is-bordered'])}>    

  {
    state.menus.map((menu, index)=>(
      <cascaderMenu  index={index} key={index} nodes={menu}></cascaderMenu>
    ))
  }
  

  </div>


      );
    }
    