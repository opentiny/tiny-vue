
    import { renderless, api } from '@opentiny/vue-renderless/cascader-panel/vue'
    import '@opentiny/vue-theme/cascader-panel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderPanel(props) {
      const {modelValue,options,border,renderLabel} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,options,border,renderLabel
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
          
<div data-tag="tiny-cascader-panel"  onKeydown={handleKeyDown} className={vc(['flex rounded text-xs', border ? 'border border-solid border-color-border' : ''])}>    

  {
    state.menus.map((menu, index)=>(
      <cascaderMenu  tiny_mode="mobile-first" index={index} key={index} nodes={menu}></cascaderMenu>
    ))
  }
  

  </div>


      );
    }
    